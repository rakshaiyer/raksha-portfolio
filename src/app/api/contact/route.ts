import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

// Simple in-memory store (good enough for portfolio)
const ipStore = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();

    const existing = ipStore.get(ip);

    if (existing) {
      if (now - existing.timestamp < RATE_LIMIT_WINDOW) {
        if (existing.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Too many requests. Try later." },
            { status: 429 },
          );
        }

        existing.count += 1;
        ipStore.set(ip, existing);
      } else {
        ipStore.set(ip, { count: 1, timestamp: now });
      }
    } else {
      ipStore.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();

    // Honeypot check
    if (body.company) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // Basic server-side validation
    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const response = await fetch(process.env.FORMSPREE_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Formspree failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

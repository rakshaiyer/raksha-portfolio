import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shree Raksha G M | Frontend & React Native Engineer",
  description: "Portfolio of Shree Raksha G M",

  icons: {
    icon: "/logoPortfolio.png",
    shortcut: "/logoPortfolio.png",
    apple: "/logoPortfolio.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
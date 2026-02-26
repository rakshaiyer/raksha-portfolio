## Raksha Portfolio

This is a [Next.js](https://nextjs.org) portfolio project built using the App Router and TypeScript. It showcases projects, skills, resume, and includes a secure contact form powered by Formspree.

## Getting Started

First, install dependencies:

npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

Environment Variables

Create a .env.local file in the root directory:

FORMSPREE_ENDPOINT=[https://formspree.io/f/your_form_id]

For production, add the same variable in your Vercel project settings under Environment Variables.

## Project Structure

## Project Structure

```markdown

├── public/                      # Static assets (resume, images, favicon)
│   └── shreeRakshaResume.pdf
├── src/
│   ├── app/                     # App Router structure
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Server-side contact API (rate limited)
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Entry page
│   │   └── globals.scss         # Global styles
│   │
│   ├── components/              # Reusable UI components
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── dashboard.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── resume.tsx
│   │   ├── skills.tsx
│   │   └── *.module.scss        # Component-level styles
│   │
│   └── data/
│       └── content.json         # Static content configuration
│
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── .env.local                   # Local environment variables (not committed)
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation

```

## Responsive layout (desktop and mobile)

## Modular component architecture

Resume download

## Contact form with:

Email validation

Server-side rate limiting

Spam protection (Formspree)

Environment variable configuration

Deployment-ready setup for Vercel

Build for Production

```bash
npm run build

npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





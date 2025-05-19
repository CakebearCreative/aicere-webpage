# Aicere Website

This is the marketing website for Aicere - a suite of AI tools that includes Aigent, Aimage, and Aibot. The website is built with Next.js 14 and Tailwind CSS, featuring a modern design with gradients, animations, and a responsive layout.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

### Set up Supabase

1. Create an account at [Supabase](https://supabase.com/) if you don't have one
2. Create a new project
3. Go to your project's dashboard → Settings → API
4. Copy the "Project URL" and "anon public" key
5. Create a `.env.local` file in the root directory with the following:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `/app`: Next.js app router pages
- `/components`: Reusable UI components
- `/public`: Static assets
- `/styles`: Global and typography styles
- `/lib`: Utility functions and contexts for authentication

## Features

- Modern UI with gradients and animations
- Responsive design for all device sizes
- User authentication with Supabase (sign in, sign up, sign out)
- Protected dashboard route for authenticated users
- Pricing page with toggle between monthly and yearly billing
- Product features comparison
- Settings dashboard for account management
- Built with Next.js 14 and Tailwind CSS

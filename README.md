# template-nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and enahnced with our favorite configuration and tooling.

## Recommendations

- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to install Node.js and NPM
- [Cursor](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

## Prerequisites

1. Install Node.js 22 (using [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md))
1. Clone this [Git repo](https://github.com/starmode-base/template-nextjs)

## Getting started

You only have to do this the first time you set up the app.

1. Run `bun install` to install dependencies

1. Run `npx vercel@latest link` to link your local project to Vercel. This will enable you to automatically pull environment variables for development. nextjs-template is hosted under the `Mikael Lirbank` Vercel project as `lirbank/nextjs-template`. The development environment variables are pulled down from Vercel every time the app is started with `npm run dev`.

## Preconfigured packages and tools

- https://nextjs.org/
- https://vitest.dev/
- https://tailwindcss.com/docs/guides/nextjs
- https://prettier.io/
- https://typescript-eslint.io/linting/configs/#strict
- https://www.npmjs.com/package/eslint-plugin-deprecation
- https://www.npmjs.com/package/@total-typescript/ts-reset
- https://www.npmjs.com/package/tiny-invariant
- https://code.visualstudio.com/

## Scripts

- `npm run dev` - Pull the latest developer environment variables from Vercel and start the development server
- `npm run build` - Check Prettier formatting, run tests, and build the production app. This script is run by Vercel when deploying.
- `npm run start` - Run the app built with `npm run build`
- `npm run lint` - Link all files
- `npm run format` - Format all files with Prettier
- `npm run test` - Run tests in watch mode

# Next.js documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

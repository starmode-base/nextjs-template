# nextjs-template

Next.js is great for content sites. If you are building an interactive web app, consider using TanStack Start.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enahnced with our favorite configuration and tooling.

## Recommendations

- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to install Node.js and NPM
- [Cursor](https://www.cursor.com/)
- [GitHub Desktop](https://desktop.github.com/)

## Prerequisites

1. Install Node.js 22 (using [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md))
1. Clone this [Git repo](https://github.com/starmode-base/nextjs-template)

## Getting started

You only have to do this the first time you set up the app.

1. Run `bun install` to install dependencies

1. Run `bunx vercel@latest link` to link your local project to Vercel. This will enable you to automatically pull environment variables for development. nextjs-template is hosted under the `Mikael Lirbank` Vercel project as `lirbank/nextjs-template`.

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

- `bun run dev` - Start the development server
- `bun run build` - Check Prettier formatting, run tests, and build the production app. This script is run by Vercel when deploying.
- `bun run start` - Run the built app
- `bun run lint` - Lint all files
- `bun run format` - Format all files with Prettier
- `bun run test` - Run tests in watch mode
- `bun run env:pull` - Pull the latest developer environment variables from Vercel

# nextjs-template

https://nextjs-template.starmode.dev/

Next.js is great for content sites. If you are building an interactive web app, consider using TanStack Start.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enahnced with our favorite configuration and tooling.

## Recommendations

- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to install Node.js and NPM
- [Cursor](https://www.cursor.com/)
- [GitHub Desktop](https://desktop.github.com/)

## Prerequisites

You only have to do this the first time you set up the app.

1. Install [Node.js](https://nodejs.org/) v22 (using [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md))
1. Install [Bun](https://bun.sh/)
1. Clone the [Git repo](https://github.com/starmode-base/nextjs-template)
1. Install dependencies: `bun install`
1. Link the Vercel project, to be able to pull development environment variables from Vercel: `bunx vercel@latest link`
   - Set up “~/GitHub/starmode-base/nextjs-template”? yes
   - Which scope should contain your project? STAR MODE
   - Found project “starmode/nextjs-template”. Link to it? yes

### Local development

1. Pull development environment variables from Vercel: `bun env:pull`
1. Start the app in development mode: `bun dev`

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

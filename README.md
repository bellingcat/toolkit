This is a [Next.js](https://nextjs.org/) project.

The goal is to generate static content pages from markdown files which are
organized and maintained on gitbook.

We can then extend them with additional filter views and other useful features.

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

## Build locally

Create a static export in the folder `/out` and serve it with a generic webserver

```
npm run build
cd ./out && python3 -m http.server
```
Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## Deploy

 Gitbook syncs automatically to the
`/gitbook` folder in the main branch of this repository.

Then merge changes to the `deploy` branch to kick off a build.
Be sure to test locally to check for rendering bugs or breaking changes.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte). This project is using `Svelte 4`.

## Notes

The data in the `db/` folder is sourced from the excellent [Ergast API](http://ergast.com/mrd/).

I have modified these instructions to use `pnpm`, however `npm` works exactly the same.

## How does this site work?

The project is powered by `SvelteKit` and was generated via `create-svelte`. The website deploys through [Vercel](https://vercel.com) which will automatically deploy every push to the `main` branch, and required no configuration other than setting up the (optional) custom `url` and pointing Vercel at the GitHub repo.

The tutorial pages are all markdown files compiled to html with [MDsveX](https://github.com/pngwn/MDsveX) (and some plugins) and [Shiki](https://shiki.matsu.io/) for syntax highlighting. These pages are lazy loaded at request time via a dynamic route and simple `await import('path/to/file.md)` loading. `MDsveX` and `Shiki` configuration is done in [svelte.config.js](./svelte.config.js) in case you want to borrow it for your own project 🔥.

Minimal HTML and CSS knowledge is needed to get a simple website like this up and running. You can learn everything you need via Google searches, Youtube and GitHub Copilot.

More about `Svelte or React` can be found [here]().

## TODO

[] react component usage  
[] events

1. structure
2. syntax
3. more syntax/control flow
4. loading
5. hooks
6. forms/superform

## Developing

Once you've downloaded the project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

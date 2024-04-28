# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Notes

The data in the `db/` folder is sourced from the excellent [Ergast API](http://ergast.com/mrd/).

I have modified these instructions to use `pnpm`, however `npm` works exactly the same.

## TODO

[] react component usage  
[] events  
[] reactive state  
[] localstorage

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

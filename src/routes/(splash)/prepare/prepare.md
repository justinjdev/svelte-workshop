---
title: Let's get ready!
description: ...get ready?.
published: true
next: 'preamble'
objective:
---

<script context="module">
        import Count from "$lib/components/examples/Count.svelte";
        export { Count };
</script>

### Thank you for signing up for my Svelte/kit workshop!

This workshop is intended to be as easy to approach as possible.

In order to prepare, you should:

1. Clone the repo! You can find it [here](https://github.com/justinjdev/svelte-workshop). For this setup, we will just be using the `main` branch. Be sure to switch to the `workshop` branch before the workshop!

```bash
        $ git clone https://github.com/justinjdev/svelte-workshop
```

2. Download an IDE, if desired. I include some recommended extensions for [VS Code](https://code.visualstudio.com/download) that I like to use with Svelte in the repo - when you open the project folder, it will prompt you to install them. If you don't feel like you deserve nice things, feel free to _not_ install those. You can also use `nvim` if you choose chaos.

> @ You can skip step 3 if you already have a working Node environment.

3. Install `Nodejs` (it comes with `npm`, but maybe you may already have `yarn` and may want `pnpm` too). I am using `nvm v0.39.7`, `Nodejs v21.7.3`, and `pnpm v9.0.6` at the time of writing, but lower versions of Node (such as `v18.whatever.ZipUses`) _probably_ work as well - `Svelte 4` requires `>=16.x.x`. Instructions for installing on MacOS are below, for other OS (or if you have issues) [check here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script):

```bash
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        $ nvm install 21.7.3 # node 18 will work too, definitely maybe
        $ nvm use 21.7.3
        # installation for pnpm and/or yarn:
        $ npm install -g pnpm
        $ npm install -g yarn
```

4. Once your installation is verified (via `node -v`), let's attempt to install dependencies and run the project:

```bash
        # omit the --open if you don't want it to open a browser window for you!
        $ pnpm install
        $ pnpm dev --open
        # or
        $ yarn install
        $ yarn run dev --open
```

5. If all goes well, you'll see something roughly like this in the terminal:  
   ![the CLI output when installation and run is successful](/assets/screenshots/successful_install.png)

   And the browser should open to the workshop home page.

After clicking the "Let's Go!" link, you should land on this page...and this element should be working!
<Count />

## Once everything is working as expected, stop the development server and switch to the main branch before the workshop!

```bash
        $ git checkout workshop && git pull
```

6. Note: If you have any issues, please feel free to reach out to me directly [@justinj](#) or ask in the [workshop slack channel](#)

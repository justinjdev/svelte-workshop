---
title: Let's get ready!
description: ...get ready?.
published: true
next: 'preamble'
---

### Thank you for signing up for my Svelte/kit workshop!

This workshop is intended to be as easy to approach as possible.

In order to prepare, you should:

1. Clone the repo! You can find it [here](https://github.com/justinjdev/svelteworkshop). For this setup, we will just be using the `prepare` branch. Be sure to switch to the `workshop` branch before the workshop.

```bash
        $ git clone -b prepare git@github.com:justinjdev/formulasvelte.git
```

2. Download an IDE, if desired. I include some recommended extensions for [VS Code](https://code.visualstudio.com/download) that I like to use with Svelte in the repo - when you open the project folder, it will prompt you to install them. If you don't feel like you deserve nice things, feel free to _not_ install those. You can also use `nvim` if you choose chaos.

3. Install `Nodejs` (it comes with `npm`, but maybe you want `pnpm`, or `yarn` too). I am using `nvm v0.39.7`, `Nodejs v21.7.3`, and `pnpm v9.0.6` at the time of writing, but lower versions of Node (such as `v20.whatever.ZipUses`) _probably_ work as well - `Svelte 4` requires `?=16.x.x`. Instructions for installing on MacOS are below, for other OS (or if you have issues) [check here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script):

```bash
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        $ nvm install 21.7.3
        $ nvm use 21.7.3
        # optional installation for pnpm and/or yarn:
        # seriously, try pnpm tho
        $ npm install -g pnpm
        $ npm install -g yarn
```

4. Once your installation is verified (via `node -v`), let's attempt to install dependencies and run the project:

```bash
        # omit the --open if you don't want it to open a browser window for you!
        # have you tried pnpm yet?
        $ pnpm install
        $ pnpm dev --open
        # or
        $ npm install
        $ npm run dev --open
        # or
        $ yarn install
        $ yarn run dev --open
```

5. If all goes well, you'll see something roughly like this:  
   ![the CLI output when installation and run is successful](/assets/screenshots/successful_install.png)

6. Note: I have verified these instructions on `MacOS` as well as `Ubuntu 22.04.4 LTS`. If you still have issues, please feel free to reach out to me directly [@justinj](#) or ask in the [workshop slack channel](#)

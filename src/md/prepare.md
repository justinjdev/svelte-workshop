---
title: Let's get ready!
description: ...get ready?.
published: true
---

### Thank you for signing up for my Svelte/kit workshop!

This workshop is intended to be as easy to approach as possible.

In order to prepare, you should:

0. Download an IDE, if desired. I include some recommended extensions for VS Code that I like to use with Svelte in the repo - when you open the project folder, it will prompt you to install them. If you don't feel like you deserve nice things, there's also always `nvim`.

1. Install Nodejs (and `npm`, or `pnpm`, or `yarn`) (I am using `nvm v0.39.7`, `Nodejs v21.7.3`, and `npm v10.5.0` at the time of writing). Instructions for installing with `homebrew` on MacOS are below, for other OS (or if you have issues), [check here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs):

```bash
        $ brew update && brew install nvm
        $ nvm install 21.7.3
        $ nvm use 21.7.3
        # optional installation for pnpm and/or yarn:
        $ npm install -g pnpm
        $ npm install -g yarn
```

2. Once your installation is verified (via `node -v`), let's attempt to install dependencies and run the project:

```bash
        $ pnpm install
        $ pnpm dev --open
        # or
        $ npm install
        $ npm run dev --open
        # or
        $ yarn install
        $ yarn run dev --open
```

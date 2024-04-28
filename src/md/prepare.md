---
title: Let's get ready!
description: ...get ready?.
published: true
---

### Thank you for signing up for my Svelte/kit workshop!

This workshop is intended to be as easy to approach as possible.

In order to prepare, you should:

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
        $ pnpm dev
        # or
        $ npm install
        $ npm run dev
        # or
        $ yarn install
        $ yarn run dev
```

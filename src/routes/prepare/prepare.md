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

1. Clone the repo! You can find it [here](https://github.com/justinjdev/svelte-workshop). For this setup, we will just be using the `main` branch. 

```bash
        $ git clone https://github.com/justinjdev/svelte-workshop
```

2. Download an IDE, if desired. I include some recommended extensions for [VS Code](https://code.visualstudio.com/download) that I like to use with Svelte in the repo - when you open the project folder, it will prompt you to install them. If you don't feel like you deserve nice things, feel free to _not_ install those. You can also use `nvim` if you choose chaos.

> @ You can skip step 3 if you already have a working Node environment, but be sure to refer back to it if you have issues in Step 4.

3. Install `Nodejs`. `Svelte 4` requires `>=16.x.x`. Instructions for installing on MacOS are below, for other OS (or if you have issues) [check here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script):

```bash
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        $ nvm install 21.7.3 # node 18 will work too, definitely maybe
        $ nvm use 21.7.3
```

4. Once your installation is verified (via `node -v`), let's attempt to install dependencies and run the project:

```bash
        # omit the --open if you don't want it to open a browser window for you!
        $ npm install
        $ npm run dev --open
```

5. If all goes well, you'll see something roughly like this in the terminal:  
   ![the CLI output when installation and run is successful](/assets/successful_install.png)

   And the browser should open to the workshop home page.

After clicking the "Let's Go!" link, you should land on this page...and this element should be working!
<Count />

6. Note: If you have any issues, please feel free to reach out to me directly `@justinj` or ask in the [workshop slack channel](https://ziprecruiter.slack.com/archives/C07677N2KH7)

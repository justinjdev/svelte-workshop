---
title: Svelte vs React
description: Compilation! DOMs! Reactivity!
published: true
prev:
next:
---

### Some basic points:

- Compilation Approach: Svelte compiles components at build time, generating highly optimized JavaScript code that directly manipulates the DOM. React, on the other hand, uses a virtual DOM and updates the actual DOM based on the differences between the virtual DOM and the real DOM.

- Bundle Size: Svelte tends to produce smaller bundle sizes compared to React applications, thanks to its compile-time optimizations and lack of a runtime library like React's. This can lead to faster initial load times for Svelte apps.

- Reactivity Model: Svelte embraces a reactive approach where components automatically update when the underlying data changes, without the need for additional code like setState in React. React relies on explicit state management through setState or hooks like useState.

- Component Structure: Svelte allows for a simpler component structure without the need for additional JSX syntax or lifecycle methods. React components typically involve JSX syntax and lifecycle methods like componentDidMount and componentDidUpdate for managing component state and side effects.

- Learning Curve: Svelte is often considered easier to learn due to its simplicity and the lack of additional abstractions like the virtual DOM. React has a steeper learning curve, especially for beginners, due to its JSX syntax and concepts like virtual DOM reconciliation.

### Are any notable companies running Svelte in production?

Yes! The NBA, Apple, Yelp, NYT, Ikea, and Spotify use Svelte for some portions of their website...the list goes on with more detail [here](https://www.okupter.com/blog/companies-using-svelte). Generally, Svelte is a good option where speed is desired - it also excels at SEO due to the compiled nature.

### Should I be using Svelte instead of React?

That's up to you. Personally, I have found that Sveltekit enables me to very quickly iterate on ideas and get things done. Especially when powered with something like [Supabase](https://supabase.com/) (which has Sveltekit adapters for auth, too) it is very straightforward to build production applications, like [this](https://poker.justinj.dev/) or [this](https://sverdle-nachochef.vercel.app/)...or this site itself.

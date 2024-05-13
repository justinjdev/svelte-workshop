import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import sectionize from 'remark-sectionize';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import shiki from 'shiki';

/**
 * Configuring mdsvex with shiki and remark. This partially determines what the markdown pages
 * will look like. It handles what codeblocks will look like too.align this element to the center of it's container
 */
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	// extensions we want to process
	extensions: ['.md'],
	layout: {
		// Custom/default layout component for all markdown files (indicated by the _ prefix)
		_: './src/mdsvex.svelte'
	},
	// handling code blocks
	highlight: {
		highlighter: async (code, lang = 'text') => {
			// Shiki is the syntax highlighter for code blocks
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });

			// convert the code block to highlighted html
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));

			// return the highlighted html
			return `{@html \`${html}\` }`;
		}
	},
	/**
	 * remarkUnwrapImages: removes the wrapping paragraph around images
	 * remarkToc: generates a table of contents
	 * sectionize: wraps each header in a section element
	 * rehypeSlug: adds an id to each header element
	 */
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }], sectionize],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexOptions.extensions],
	// preprocess is used in Svelte to apply preprocessing steps to your Svelte components before they are compiled.
	// It allows you to transform your code or perform additional operations on it.
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

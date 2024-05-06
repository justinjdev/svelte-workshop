/**
 * Vite configuration file for the project.
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// using only the sveltekit plugins
	plugins: [sveltekit()],

	test: {
		/**
		 * File patterns to include in the test run.
		 */
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

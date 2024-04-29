// See https://kit.svelte.dev/docs/types#app

import type SqliteDB from '$lib/server/db/db';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			isCool: boolean;
			db: SqliteDB;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

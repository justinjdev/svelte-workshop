// See https://kit.svelte.dev/docs/types#app

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: boolean;
			db: SqliteDB;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

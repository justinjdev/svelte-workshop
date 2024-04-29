import { writable } from 'svelte/store';

export type UserInfo = {
	userName: string;
	// pretend auth
	isZipEmployee: boolean;
};

/**
 * a user store that leverages local storage to persist the user.
 */
const userStore = () => {
	const unsubscribe = () => {};
	const { subscribe, update } = persisted<UserInfo>('user', {
		userName: 'Mysterion',
		isZipEmployee: false
	});

	return { subscribe, update, unsubscribe };
};

export const user = userStore();
export type UserStore = ReturnType<typeof userStore>;

export const mapStore = <T>() => {
	const unsubscribe = () => {};

	const { subscribe, update } = writable<Map<string, T>>(new Map<string, T>());

	const add = (key: string, value: T) => {
		update((state) => {
			state.set(key, value);
			return state;
		});
	};

	const removeById = (id: string) => {
		update((state) => {
			state.delete(id);
			return state;
		});
	};

	const updateValue = (key: string, value: Partial<T>) => {
		update((state) => {
			const current = state.get(key);
			if (current) {
				state.set(key, { ...current, ...value });
			}
			return state;
		});
	};

	return {
		subscribe,
		add,
		updateValue,
		removeById,
		unsubscribe
	};
};

import { persisted } from 'svelte-persisted-store';

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const userInfo = persisted('preferences', {
	userName: 'Mysterion',
	isZipEmployee: false
});

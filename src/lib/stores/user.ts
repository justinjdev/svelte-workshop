import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

export type UserInfo = {
	userName: string;
	// pretend auth
	isZipEmployee: boolean;
};

/**
 * This is a custom store implementation - you can use it to store a map of items that is accessible anywhere client-side.
 *
 * @returns a mapstore
 */
export const mapStore = <T>() => {
	// Function to unsubscribe from the store
	const unsubscribe = () => {};

	// Get the subscribe and update functions from the writable store
	const { subscribe, update } = writable<Map<string, T>>(new Map<string, T>());

	/**
	 * Add a new item to the map store. This method wraps the update function.
	 *
	 * @param key - The key of the item.
	 * @param value - The value of the item.
	 */
	const add = (key: string, value: T) => {
		update((state) => {
			state.set(key, value);
			return state;
		});
	};

	/**
	 * Remove an item from the map store by its key. This method wraps the update function.
	 *
	 * @param id - The key of the item to remove.
	 */
	const removeById = (id: string) => {
		update((state) => {
			state.delete(id);
			return state;
		});
	};

	/**
	 * Update the value of an item in the map store. Again, wraps the update function.
	 *
	 * @param key - The key of the item to update.
	 * @param value - The partial value to update the item with.
	 */
	const updateValue = (key: string, value: Partial<T>) => {
		update((state) => {
			const current = state.get(key);
			if (current) {
				state.set(key, { ...current, ...value });
			}
			return state;
		});
	};

	// Return the functions we want to expose - this defined the 'public' API of the store.
	return {
		subscribe,
		add,
		updateValue,
		removeById,
		unsubscribe
	};
};

// there are also a lot of pre-implemented stores you can use, like this one that leveraged localStorage
// First param `preferences` is the local storage key.
// Second param is the initial value.
export const userInfo = persisted('preferences', {
	userName: 'Mysterion',
	isZipEmployee: false
});

import { writable } from 'svelte/store';

export const pokesStore = writable([]);
export const pokedexStore = writable([]);
export const pokesFetching = writable(false);

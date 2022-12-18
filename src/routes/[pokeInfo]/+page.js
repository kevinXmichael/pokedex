import { get } from 'svelte/store';
import {fetchPokes, pokesStore} from '../../stores/pokestore';
export const load = async ({ params }) => {
	const fetchPokemon = (id) => {
		return get(pokesStore).find(pokemon => pokemon.id == id)
	};
	// Ensure pokes are fetched; will not fetch if data already present
	// We need that in case we open the page directly with the id
	await fetchPokes();
	return {
		pokemon: fetchPokemon(params.pokeInfo)
	};
};

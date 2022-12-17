
import { pokesStore, pokesFetching } from '../stores/pokestore';

export const load = async () => {
	const fetchPokes = async () => {
		pokesFetching.set(true);
		let pokemons = [];
		let calls = [];
		for (let i = 1; i < 22; i++) {
			const call = async () => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
				const data = await res.json();
				pokemons = [data, ...pokemons];
			};
			calls.push(call());
		}
		await Promise.all(calls);
		pokesFetching.set(false);
		return pokemons;
	};

	pokesStore.set(await fetchPokes());
};


// do not erase // 
// versão com waterfall

// import { pokes, pokesFetching } from '../stores/pokestore';

// export const load = async () => {

// 	const fetchPokes = async () => {
// 		pokesFetching.set(true);
// 		let pokemons = [];
// 		for (let i = 1; i < 22; i++) {
// 			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
// 			const data = await res.json();
// 			pokemons = [data, ...pokemons];
// 		}

// 		pokesFetching.set(false);
// 		return pokemons;
// 	};

// 	pokes.set(await fetchPokes());
// };

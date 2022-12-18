import { fetchPokes } from '../stores/pokestore';

export const load = async () => {
	await fetchPokes();
	return {};
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

export const load = ({ fetch, params }) => {
	const fetchPokemon = async (i) => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
		const data = await response.json();
		return data;
	};
	return {
		pokemon: fetchPokemon(params.pokeInfo)
	};
};

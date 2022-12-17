<script>
	import { pokedexStore } from '../../stores/pokestore';
	let capturados = $pokedexStore;
	capturados.sort((a, b) => a.id - b.id);

	const handleClick = (id) => {
		capturados = capturados.filter((poke) => poke.id != id);
		pokedexStore.set(...capturados);
		console.log(`limpos`, capturados);
	};
</script>

<a href="/">back</a>
<h4>
	pokedex wallet / captured pokemons <br />
	note that we lost all of the home page data if we go back to home page
</h4>
{#each capturados as poke}
	<p>{poke.name}, {poke.id}</p>
	<button
		on:click={() => {
			handleClick(poke.id);
		}}
	>
		remove from pokedex wallet
	</button>
{/each}

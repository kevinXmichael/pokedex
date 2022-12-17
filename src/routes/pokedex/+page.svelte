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

<a href="/">voltar</a>
<h1>pokedex</h1>
{#each capturados as poke}
	<p>{poke.name}, {poke.id}</p>
	<button
		on:click={() => {
			handleClick(poke.id);
		}}
	>
		remover
	</button>
{/each}

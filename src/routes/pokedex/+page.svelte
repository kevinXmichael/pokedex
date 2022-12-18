<script>
	import {removeFromPokedex, pokedexStore} from '../../stores/pokestore';
</script>

<a href="/">back</a>
<h4>
	pokedex wallet / captured pokemons <br />
	note that we lost all of the home page data if we go back to home page
</h4>
{#each $pokedexStore.sort((a, b) => a.id - b.id) as poke}
	<p>{poke.name}, {poke.id}</p>
	<button
		on:click={() => removeFromPokedex(poke.id) }
	>
		remove from pokedex wallet
	</button>
{:else}
	<p>No pokemon captured yet</p>
{/each}

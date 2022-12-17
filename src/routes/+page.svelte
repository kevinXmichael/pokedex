<script>
	import { pokesStore, pokesFetching, pokedexStore } from '../stores/pokestore';
	// console.log($pokesStore[0].types[0].type.name);

	let bgLtGreen = '#729F92';
	let bGorange = '#EAAB7D';
	let bgBlue = '#71C3FF';
	let bgDkGreen = '#76A866';
	let bgBrown = '#BF9762';

	let todos = $pokesStore;
	todos.sort((a, b) => a.id - b.id);
	let reset = $pokesStore;
	let capturados = [];
	capturados.sort((a, b) => a.id - b.id);

	const addPokedex = (id) => {
		// add to  pokedexStore//
		let poke = todos.find((poke) => poke.id == id);
		pokedexStore.update((pokedex) => [...pokedex, poke]);
		capturados = $pokedexStore;
		// remove from todos array [which copied content from pokeStore//
		todos = todos.filter((poke) => poke.id != id);
	};

	$: pokedexStore.subscribe((pokedex) => {
		capturados = pokedex;
	});
</script>

<a href="/pokedex">pokedex</a>

<h4>pokedex link status</h4>
{#each capturados as item}
	<p>captured pokemon id # {item.id} check pokedex route</p>
{/each}

<h4>
	bellow all 20 pokemons from fetch -> pokeStore -> todos array. This is the home page initial state <br
	/>
	please note that the pokemon ID will take you to route params.
</h4>
{#if $pokesFetching}
	<p>Fetching...</p>
{/if}

<div class=" bg-slate-400 container flex flex-row flex-wrap-reverse h-full w-full">
	{#each todos as poke (poke.id)}
		<div class="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
			<a href="/{poke.id}" data-sveltekit-prefetch><h4>ID# {poke.id}</h4></a>
			<p>{poke.name}</p>
			{#each poke.types as type}
				<div class="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
					<h4>{type.type.name}</h4>
				</div>
			{/each}
			<button on:click={() => addPokedex(poke.id)}>Capture!</button>
		</div>
	{/each}
</div>

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
		// adiciona na carteira store pokedex//
		let poke = todos.find((poke) => poke.id == id);
		pokedexStore.update((pokedex) => [...pokedex, poke]);
		capturados = $pokedexStore;
		// remove da lista de todos//
		todos = todos.filter((poke) => poke.id != id);
		// console.log(`capturadosfora`, capturados);
		// console.log(`pokedex atualizada`, $pokedexStore);
	};

	$: pokedexStore.subscribe((pokedex) => {
		capturados = pokedex;
	});

	`--------------------------------------------------------------------------`;
</script>

<a href="/pokedex">pokedex</a>

<h1>pokedex</h1>
{#each capturados as item}
	<p>funcionou {item.id}</p>
{/each}

<h1>teste 5</h1>
{#if $pokesFetching}
	<p>Fetching...</p>
{/if}

<div class=" bg-slate-400 container flex flex-row flex-wrap-reverse h-full w-full">
	{#each todos as poke (poke.id)}
		<div class="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
			<a href="/{poke.id}" data-sveltekit-prefetch><h1>{poke.id}</h1></a>
			<p>{poke.name}</p>
			{#each poke.types as type}
				<div class="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
					<h4>{type.type.name}</h4>
				</div>
			{/each}
			<button on:click={() => addPokedex(poke.id)}>Add</button>
		</div>
	{/each}
</div>

Hey, Kev.

Good morning / good Afternoon!

Thanks for your quick reply, man! :)

so, here are the tasks.

1.  inside [pokeinfo] you will find page.js and +page.svelte

They load with numbers, if you type somehing like this, in a dynamic order:

http://localhost:5173/2 or http://localhost:5173/34 will work. etc.

In this page.js, I´m fetching data that I already have in a store. In this case, /stores/pokestore.js. So there is no need to another round trip to the pokemon API. I want to use the store instead of fetching again, and of course, make it work with http://localhost:5173/2 dynamics.

2.  Whenever you capture a pokemon, in the home page, it will remove from todos array, and add it to the pokedex store, located in /stores/pokestore.js After capturing, check /pokedex. It will appear there. And this works. Now. the problem is: if I REMOVE from pokedex wallet, it should go back to the todos array, in home page, and re-render in the home page like the initial state. If you try to go back, hitting the back button in the browser, the whole page disappears.

3.  So, to make it short: the user should transfer a pokemon from the home page, to the pokedex page, or revert this operation. From pokedex page to the home page / Data should not be fetched twice / home page shouldnt disappear when back button is clicked.

That all! :)

Let me know if you have any questions! :)

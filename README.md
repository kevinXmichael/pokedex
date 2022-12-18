# What I did

- Fetching pokemon only once
- Fetching pokemon in stores only; the load functions of page.js will just call the functions, this makes it easier to reuse the functions
- Removed `todos` and `capturados` as we dont need copies of the stores, only makes it harder to maintain code
- Using `addToPokedex` and `removeFromPokedex` in stores which are just opposite functions the handle stores mutations

## General tips

- Use a Model-View-Controller (MVC) pattern in your code, this sounds harder than it actually is:
- Try to handle your business logic in store files only like I did now
- page.js files should only load data and not mutate it => don't handle any greater business logic here
- .svelte files (Components) should only display the data and only contain UI-logic but not greater business logic
- 
// const poke_container = document.getElementById('poke-container')
// const pokemon_count = 150
// const colors = {
//     fire: '#FDDFDF',
//     grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#f4e7da',
// 	rock: '#d5d5d4',
// 	fairy: '#fceaff',
// 	poison: '#98d7a5',
// 	bug: '#f8d5a3',
// 	dragon: '#97b3e6',
// 	psychic: '#eaeda1',
// 	flying: '#F5F5F5',
// 	fighting: '#E6E0D4',
// 	normal: '#F5F5F5'
// }

// const main_types = Object.keys(colors)

// const fetchPokemons = async () => {
//     for(let i = 1; i <= pokemon_count; i++) {
//         await getPokemon(i)
//     }
// }

// const getPokemon = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const res = await fetch(url)
//     const data = await res.json()
//     createPokemonCard(data)
// }

// const createPokemonCard = (pokemon) => {
    
// }

// fetchPokemons()						

// andres
const listPokemon = document.querySelector('#listPokemon');
let url = "https://pokeapi.co/api/v2/pokemon/"

for (let i = 1; i <= 151; i++) {
	fetch(url + i)
		.then((response) => response.json())
		.then(data => showpokemon(data))
}

function showpokemon(poke) {

	let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>` );

	const div = document.createElement("div");
	div.classList.add("pokemon");
	div.innerHTML =  `
		<div class="img-container">
			<img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
		</div>
		<div class="info">
			<span class="number">#${poke.id}</span>
			<h3 class="name">${poke.name}</h3>
			<small class="type">Type: <span>${tipos}</span></small>
		</div>
	`;

	listPokemon.append(div);
}

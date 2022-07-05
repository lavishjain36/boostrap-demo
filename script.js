const poke_container =
    document.getElementById('poke_container');
const pokemons_number = 50; // to display 50 pokemons on screen


const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {  
        await getPokemon(i)
    }
}
const getPokemon = async id => {
    const url =
        `https://pokeapi.co/api/v2/pokemon/${id}`;
    const data = await fetch(url);// to fetch the data from pokemon api
    const pokemon = await data.json();
    createPokemonCard(pokemon);
    //console.log(pokemon)
}
fetchPokemons();


function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement('div');
    
    pokemonElement.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);//to make the first letter of name to uppercase
    //console.log(pokemon.name)
    
    const pokeInnerHTML = `
    <div class= "img-container">
    <img src = 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
    alt="pokemon image"/> 
    </div>
<div class= "data">
    <div  class = "info"
    <h4 class = "number">${pokemon.id}. ${name}</h4>
    </div>
    <div class = "ability">
    <p class= "title"> Ability: ${pokemon.abilities[0].ability.name}</p>
    </div>
    <div class= "moves">
    <p class="title"> Moves: ${pokemon.moves[0].move.name}</p>
    </div>
    <div class= "weight">
    <p class="title"> Weight: ${pokemon.weight}</p>
    </div>
 </div>   
    `; // getting id, name, abilities, moves and weight od each pokemon from the api object
    
    pokemonElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonElement)

}
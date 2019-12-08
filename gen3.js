
const promises = []; // Array that will hold promises

// loops and fetches pokemon asynchronouslt 
for (let i = 252; i <= 386; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`; 
  promises.push(fetch(url).then(res => res.json()));
}

Promise.all(promises).then(results => {
    const pokemon = results.map(data => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map(type => type.type.name).join(", "),
      }));
      displayPokemon(pokemon);
});


  const displayPokemon = pokemon => {
    const pokemonHTMLString = pokemon
    .map(
        pokeman =>
        `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
        `
    )
    .join("");

    pokedex.innerHTML = pokemonHTMLString;
};



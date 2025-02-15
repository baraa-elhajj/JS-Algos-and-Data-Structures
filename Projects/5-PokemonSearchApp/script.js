const pokemonApiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

let pokemonList = null;

const fetchPokemonListAsync = async () => {
    try {
        const res = await fetch(pokemonApiUrl);
        const data = await res.json();
        const { count, results } = data;
        console.log("Fetched " + count + " items >>\nPokémon List: ", results);

        return results;
    } catch (err) {
        console.log(err);
        alert("Error while fetching Pokémon list. Please try again..");
    }
}

const fetchPokemonInfoAsync = async (pokemon) => {
    try {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        console.log("Fetched Pokémon info: ", data);

        return data;
    } catch (err) {
        console.log(err);
        alert("Error while fetching Pokémon info for (" + pokemon.name + "). Please try again..");
    }
}

const findPokemonById = (id) => {
    return pokemonList.find((item) => item.id == id);
}

const findPokemonByName = (name) => {
    return pokemonList.find((item) => item.name == name);
}

const findPokemonAsync = async () => {
    if (searchInput.value == "") {
        alert("Please enter a Pokémon ID or Name...");
        return;
    }

    let pokemon = null;
    if (pokemonList == null) {
        pokemonList = await fetchPokemonListAsync();
    }

    if (isNaN(searchInput.value)) {
        // user entered an Name
        pokemon = findPokemonByName(searchInput.value);
    }
    else {
        // user entered an ID
        pokemon = findPokemonById(Number(searchInput.value));
    }

    if (pokemon == null) {
        alert("Pokémon not found");
        return;
    }

    console.log("Pokémon found: ", pokemon);

    // Update stats >>
    const pokemonInfo = await fetchPokemonInfoAsync(pokemon);
}

searchBtn.addEventListener('click', findPokemonAsync);
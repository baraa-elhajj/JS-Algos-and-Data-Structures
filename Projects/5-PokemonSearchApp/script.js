const pokemonApiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

let pokemonList = null;

const fetchPokemonList = async () => {
    try {
        const res = await fetch(pokemonApiUrl);
        const data = await res.json();
        const { count, results } = data;
        console.log("Fetched " + count + " items >>\nPokemon List: ", results);

        return results;
    } catch (err) {
        console.log(err);
        alert("Error while fetching pokemon list. Try again..");
    }
}

const findPokemonById = (id) => {
    return pokemonList.find((item) => item.id == id);
}

const findPokemonByName = (name) => {
    return pokemonList.find((item) => item.name == name);
}

const findPokemon = async () => {
    if (searchInput.value == "") {
        alert("Please enter an ID or a Name...");
        return;
    }

    let pokemon = null;
    if (pokemonList == null) {
        pokemonList = await fetchPokemonList();
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

    console.log("Pokemon found: ", pokemon);

    // Update stats >>
}

searchBtn.addEventListener('click', findPokemon);
const pokemonApiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const pokemonId = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("name");
const pokemonImage = document.getElementById("pokemon-image");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speed = document.getElementById("speed");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");

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

const updatePokemonStats = (pokemonInfo) => {
    pokemonId.textContent = pokemonInfo.id;
    pokemonName.textContent = pokemonInfo.name;
    pokemonImage.src = pokemonInfo.sprites.front_default;
    pokemonImage.style.display = "block";
    weight.textContent = pokemonInfo.weight;
    height.textContent = pokemonInfo.height;
    hp.textContent = pokemonInfo.stats?.find(item => item.stat.name === "hp").base_stat;
    attack.textContent = pokemonInfo.stats?.find(item => item.stat.name === "attack").base_stat;
    defense.textContent = pokemonInfo.stats?.find(item => item.stat.name === "defense").base_stat;
    speed.textContent = pokemonInfo.stats?.find(item => item.stat.name === "speed").base_stat;
    specialAttack.textContent = pokemonInfo.stats?.find(item => item.stat.name === "special-attack").base_stat;
    specialDefense.textContent = pokemonInfo.stats?.find(item => item.stat.name === "special-defense").base_stat;
    types.textContent = pokemonInfo.types?.map(item => item.type.name).join(", ");
}

const findPokemonAsync = async () => {
    if (searchInput.value == "") {
        alert("Please enter a Pokémon name or ID...");
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
    updatePokemonStats(pokemonInfo);
}

searchBtn.addEventListener('click', findPokemonAsync);
# Pokemon Search App

A simple and stylish Pokémon search application that allows users to retrieve Pokémon details, including name, ID, weight, height, types, and stats.

## Features

- 🔍 **Search Pokémon** by name or ID
- 📊 **Displays key details** such as height, weight, types, and stats
- 🎨 **Modern UI** with smooth animations and responsive design
- 📱 **Mobile-friendly layout**

## Technologies Used

- HTML
- CSS (with variables and modern design principles)
- JavaScript (for dynamic data rendering)
- Pokémon API (for fetching Pokémon data)

## How to Use

1. Enter a Pokémon name or ID in the search bar.
2. Click the **Search** button.
3. View the Pokémon's information, including:
   - Name and ID
   - Height and Weight
   - Types (displayed as badges)
   - Stats (HP, Attack, Defense, etc.)
   - Pokémon image

## Setup Instructions

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/pokemon-search-app.git
   ```
2. Open `index.html` in a browser.
3. Ensure you have an internet connection to fetch data from the Pokémon API.

## Folder Structure

```
📂 pokemon-search-app
 ├── 📄 index.html     # Main HTML structure
 ├── 📄 styles.css     # Application styles
 ├── 📄 script.js      # JavaScript logic for API calls and interactivity
 ├── 📄 README.md      # Documentation
```

## API Reference

This app fetches Pokémon data from the [PokéAPI](https://pokeapi.co/).

- **Base URL:** `https://pokeapi.co/api/v2/pokemon/{name or id}/`
- Example request:
  ```sh
  https://pokeapi.co/api/v2/pokemon/pikachu/
  ```
- Response format:
  ```json
  {
    "id": 25,
    "name": "pikachu",
    "height": 4,
    "weight": 60,
    "types": [
      { "type": { "name": "electric" } }
    ],
    "stats": [
      { "base_stat": 35, "stat": { "name": "hp" } },
      { "base_stat": 55, "stat": { "name": "attack" } }
    ]
  }
  ```

## Future Enhancements Ideas

- Add **autocomplete** for Pokémon names.
- Include **shiny Pokémon** toggle.
- Improve **animations and UI elements**.
- Implement **local storage** for recently searched Pokémon.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

🚀 *Catch 'em all with this Pokémon Search App!*
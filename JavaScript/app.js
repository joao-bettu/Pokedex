const ApiUrl = "https://pokeapi.co/api/v2/";
// https://pokeapi.co/api/v2/type/ --> Para buscar dados de tipos
// https://pokeapi.co/api/v2/pokemon/ --> Para buscar dados de pokemóns

const radios = document.getElementsByName("radio");

radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
        const value = radio.value;
        const sections = document.getElementsByClassName("hidden");

        const randomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const showAndHide = (index, section) => {
            for (let i = 0; i < section.length; i++) {
                if (i === index) {
                    section[i].style.display = "block";
                } else {
                    section[i].style.display = "none";
                }
            }
        }

        console.log(event.target);

        switch (value){
            case "poke-id":
                showAndHide(0, sections);
                const getPokeById = async (id) => {
                    try {
                        console.log("Pokemon ID: ", id);
                        const pokemonData = await fetch(`${ApiUrl}pokemon/${id}`)
                            .then(response => response.json())
                            .then(data => {
                                return data;
                            })
                            .catch(error => console.log(error));
                        console.log(pokemonData);
                    } catch (error) {
                        console.log("Erro:", error);
                    }
                    return "Pokemon selected using ID!";
                };
                const searchId = document.getElementById("search-by-id");
                const inputId = document.getElementById("pokedex-id");
                searchId.addEventListener("click", event => {
                    event.preventDefault();
                    const inputId = document.getElementById("pokedex-id");
                    const pokemonId = parseInt(inputId.value);
                    console.log(pokemonId);
                    getPokeById(pokemonId).then(r => console.log(r));
                })
                break;
            case "poke-name":
                showAndHide(1, sections);
                const getPokeByName = async (name) => {
                    try {
                        console.log("Pokemon name: ", name);
                        const pokemonData = await fetch(`${ApiUrl}pokemon/${name}`)
                            .then(response => response.json())
                            .then(data => {
                                return data;
                            })
                            .catch(error => console.log(error))
                        console.log(pokemonData);
                    } catch (error){
                        console.log(error);
                    }
                    return "Pokemon selected using name!";
                };
                const searchName = document.getElementById("search-by-name");
                searchName.addEventListener("click", event => {
                    event.preventDefault();
                    const inputName = document.getElementById("pokemon-name");
                    const pokemonName = inputName.value;
                    console.log(pokemonName);
                    getPokeByName(pokemonName).then(r => console.log(r));
                })
                break;
            case "radom-pokemon":
                showAndHide(-1, sections);
                const randomPokemon = async () => {
                    try {
                        const randomPokemon = randomId(1, 1025);
                        console.log("Pokemon ID: ", randomPokemon);
                        const pokemonData = await fetch(`${ApiUrl}pokemon/${randomPokemon}`)
                            .then(response => response.json())
                            .then(data => {
                                return data;
                            })
                            .catch(error => console.log("Error: ", error));
                        console.log(pokemonData);
                    } catch (error) {
                        console.log(error);
                    }
                    return "Random pokemon selected!";
                };
                randomPokemon().then(r => console.log(r));
                break;
            default:
                console.log(value);
                break;
        }
    })
})
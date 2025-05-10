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
        const getPokeByID = id => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Getting pokemon by ID!");
                    resolve({pokemon:
                            fetch(`${ApiUrl}pokemon/${id}`)
                                .then(response => response.json())
                                .then(data => {
                                    return data;
                                })
                                .catch(error => console.log(error))
                    })
                }, 1500);
            })
        };

        const getPokeByName = name => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Getting pokemon by name!");
                    resolve({pokemon:
                            fetch(`${ApiUrl}pokemon/${name}`)
                                .then(response => response.json())
                                .then(data => {
                                    return {
                                        id: data.id,
                                        name: data.name,
                                        types: data.types,
                                        height: data.height,
                                        weight: data.weight,
                                        region: data.region,
                                        sprite: data.images
                                    };
                                })
                                .catch(error => console.log(error))
                    })
                }, 2000);
            })
        }

        console.log(event.target);

        switch (value){
            case "poke-id":
                showAndHide(0, sections);
                break;
            case "poke-name":
                showAndHide(1, sections);
                break;
            case "radom-pokemon":
                showAndHide(-1, sections);
                const randomPokemon = async () => {
                    try {
                        const randomPokemon = randomId(1, 1025);
                        console.log(randomPokemon);
                        const pokemonData = await getPokeByID(randomPokemon);
                        console.log(pokemonData);
                        console.log(pokemonData.name);
                    } catch (error) {
                        console.log(error);
                    }
                };
                randomPokemon();
                break;
            default:
                console.log(value);
                break;
        }
    })
})
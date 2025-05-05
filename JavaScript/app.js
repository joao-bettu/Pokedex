const ApiUrl = "https://pokeapi.co/api/v2/"
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
        const getPokeInfo = (id, name) => {
            if (typeof id === "number") {
                if (id >= 1 && id <= 1025) {
                    fetch(`${ApiUrl}pokemon/${id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => console.log(error));
                } else {
                    console.log("Invalid ID!");
                }
            } else {
                console.log("ID is not a number!");
            }

            if (typeof name === "string") {
                if (name !== "") {
                    fetch(`${ApiUrl}pokemon/${name}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => console.log(error));
                } else {
                    console.log("Invalid Name!");
                }
            } else {
            console.log("Name is not a string!");
            }
        }

        switch (value){
            case "poke-id":
                showAndHide(0, sections);
                break;
            case "poke-name":
                showAndHide(1, sections);
                break;
            case "radom-pokemon":
                const randomPokemon = randomId(1, 1025);
                console.log(randomPokemon);
                break;
            default:
                console.log(value);
                break;
        }
    })
})
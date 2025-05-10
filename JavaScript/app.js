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
        // const getPokeByID = (id) => {
        //     if (typeof id === "number") {
        //         if (id >= 1 && id <= 1025) {
        //             fetch(`${ApiUrl}pokemon/${id}`)
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data);
        //                 })
        //                 .catch(error => console.log("Erro:" + error));
        //         } else {
        //             console.log("Invalid ID!");
        //         }
        //     } else {
        //         console.log("ID is not a number!");
        //     }
        // }
        const getPokeByID = id => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Getting pokemon by ID!");
                    resolve(id,
                        fetch(`${ApiUrl}/${id}`)
                            .then(response => response.json())
                            .then(data => {
                                return data;
                            })
                            .catch(error => console.log(error))
                    )
                }, 1500);
            })
        };
        // const getPokeByName = (name) => {
        //     if (typeof name === "string") {
        //         if (name !== "") {
        //             fetch(`${ApiUrl}pokemon/${name}`)
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data);
        //                 })
        //                 .catch(error => console.log("Erro:" + error));
        //         } else {
        //             console.log("Invalid Name!");
        //         }
        //     } else {
        //         console.log("Name is not a string!");
        //     }
        // };
        const getPokeByName = name => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Getting pokemon by name!");
                    resolve(name,
                        fetch(`${ApiUrl}/${name}`)
                            .then(response => response.json())
                            .then(data => {
                                return data;
                            })
                            .catch(error => console.log(error))
                    )
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
                const randomPokemon = randomId(1, 1025);
                console.log(randomPokemon);
                break;
            default:
                console.log(value);
                break;
        }
    })
})
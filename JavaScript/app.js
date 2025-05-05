const ApiUrl = "https://pokeapi.co/api/v2/"
// https://pokeapi.co/api/v2/type/ --> Para buscar dados de tipos
// https://pokeapi.co/api/v2/pokemon/ --> Para buscar dados de pokemóns

const radios = document.getElementsByName("radio");

radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
        const value = radio.value;
        const sections = document.getElementsByClassName("hidden");

        function showAndHide (index, section) {
            for (let i = 0; i < section.length; i++) {
                if (i === index) {
                    section[i].style.display = "block";
                } else {
                    section[i].style.display = "none";
                }
            }
        }

        switch (value){
            case "poke-id":
                showAndHide(0, sections);
                break;
            case "poke-name":
                showAndHide(1, sections);
                break;
            default:
                console.log(value);
                break;
        }
    })
})
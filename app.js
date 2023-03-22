"use strict"

window.addEventListener("load", initApp)

function initApp() {
  const randyMarsh = {
    name: "Randy Marsh",
    nickname: "Steamy Ray Vaughn, Lorde, The Amazingly Randy, N- Word Guy, Karen",
    image: "billede/RANDY-MARSH-quotes-internet-porn (2).jpg",
    occupation: "Weed farmer, former Geologist and cocaine farmer",
    age: 45,
    voiceBy: "Trey Park",
    gender: "Male",
    religion: "Roman Catholic, Mormonism (formerly), Atheist (formerly)",
    catchPhrase: "I'm sorry, I thought this was America!",
    hairColor: "Black",
    schoolGrade: "Genius",
    episodes: "1 mil",
    appearances: "Infinite",
      firstAppearance: "Volcano S01E03",
    };
    
    showCharacter(randyMarsh);
}

function showCharacter(character) {
    
    const html =
    /*html*/
    `
        <article class="grid-item">
            <img src="${character.image}">
            <h2>${character.name}</h2>
            <p>${character.age + " " + "years old"}</p>
        </article>
        `;
    
    document.querySelector("#character").insertAdjacentHTML("beforeend", html);
    document.querySelector("#character article:last-child").addEventListener("click", characterClicked);
        
    function characterClicked() {
        showCharacterModal(character);
    }
}

function showCharacterModal(character) {
    console.log(character);
    const dialog = document.querySelector("#dialog-character");
    // Image
    document.querySelector("#dialog-image").src = character.image;

    // Cacth Phrase and Name
    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-quote").textContent = character.catchPhrase;

    // Info
     dialog.querySelector("#dialog-nickname").textContent = character.nickname;
     dialog.querySelector("#dialog-occupation").textContent = character.occupation;
     dialog.querySelector("#dialog-age").textContent = character.age;
     dialog.querySelector("#dialog-gender").textContent = character.gender;
     dialog.querySelector("#dialog-haircolor").textContent = character.hairColor;
     dialog.querySelector("#dialog-religion").textContent = character.religion;
     dialog.querySelector("#dialog-grade").textContent = character.schoolGrade;
     dialog.querySelector("#dialog-voicedby").textContent = character.voiceBy;
     dialog.querySelector("#dialog-episodes").textContent = character.episodes;
     dialog.querySelector("#dialog-appearances").textContent = character.appearances;
    dialog.querySelector("#dialog-firstappearance").textContent = character.firstAppearance;
    
    // Show Dialog
        document.querySelector("#dialog-character").showModal();

}






    // <p>Age: ${character.age}</p> 
    // <p>Voice by: ${character.voiceBy}</p> 
    // <p>Gender: ${character.gender}</p> 
    // <p>Religion: ${character.religion}</p> 
    // <p>Cath Phrase: ${character.catchPhrase}</p> 
    // <p>Hair Color: ${character.hairColor}</p> 
    // <p>School Grade ${character.schoolGrade}</p> 
    // <p>Episodes: ${character.episodes}</p> 
    // <p>Appearances: ${character.appearances}</p> 
    // <p>First Appearance: ${character.firstAppearance}</p> 
    
    
    
    // function start() {
        // const data = getData();
// showAllCharacters(data)
// }

// function getData() {
// const data = [];
// return data;
// }

// function showAllCharacters(list) {
// showCharacter(character);
// }

// function showCharacter(character) {
// const html = ``;
// }

// function showDialog(character) {
    
// }
// function closeDialog() {
    
// }
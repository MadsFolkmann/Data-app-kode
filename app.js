"use strict"

window.addEventListener("load", initApp)

function initApp() {
  const randyMarch = {
    name: "Randy March",
    nickname: "Steamy Ray Vaughn, Lorde, The Amazingly Randy, N- Word Guy, Karen",
    image: "billede/RANDY-MARSH-quotes-internet-porn (2).jpg",
    age: 45,
    voiceBy: "Trey Park",
    gender: "Male",
    religion: "Roman Catholic, Mormonism (formerly), Atheist (formerly)",
    catchPhrase: "I'm sorry, I thought this was America!",
    hairColor: "Black",
    schoolGrade: "NaN",
    episodes: "undefined",
    appearances: "Infinite",
      firstAppearance: "Volcano S01E03",
    };
    
    addCharacter(randyMarch);
}

function addCharacter(character) {
    const html =
      /*html*/
      `<h2>${character.name}</h2> 

        <p>Nickname: ${character.nickname}</p> 
        <img src="${character.image}">
        <p>Age: ${character.age}</p> 
        <p>Voice by: ${character.voiceBy}</p> 
        <p>Gender: ${character.gender}</p> 
        <p>Religion: ${character.religion}</p> 
        <p>Cath Phrase: ${character.catchPhrase}</p> 
        <p>Hair Color: ${character.hairColor}</p> 
        <p>School Grade ${character.schoolGrade}</p> 
        <p>Episodes: ${character.episodes}</p> 
        <p>Appearances: ${character.appearances}</p> 
        <p>First Appearance: ${character.firstAppearance}</p> 
`;
     document.querySelector("#southParkCharacter").insertAdjacentHTML("beforeend", html);

}



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
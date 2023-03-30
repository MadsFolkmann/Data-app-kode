"use strict"

window.addEventListener("load", initApp)

let showingGrid;

async function initApp() {
   
    const allCharacters = await getCharacter("data/allCharacters.json");
    showAllCharacters(allCharacters)
    
    showingGrid = true;
    document.querySelector("#button_change_display").addEventListener("click", changeDisplay);
}

function changeDisplay() {
    console.log(showingGrid)
    if (showingGrid) {
        showingGrid = false;
        console.log(showingGrid)
        document.querySelector("#character").classList.add("hidden");
        document.querySelector("#table").classList.remove("hidden");
        document.querySelector("#button_change_display").textContent = "Change to Grid"
    } else if (!showingGrid) {
        showingGrid = true;
        document.querySelector("#table").classList.add("hidden");
        document.querySelector("#character").classList.remove("hidden");
        document.querySelector("#button_change_display").textContent = "Change to Table";
    }
}


async function getCharacter(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
      
// Create HTML and display all users from given list
function showAllCharacters(characterList) {
    //loop through all users and create an article with content for each
    for (const character of characterList) {
        showCharacter(character);
    }
}


function showCharacter(character) {
    
    const html =
    /*html*/
    `
        <article class="grid-item">
            <img src="${character.image}">
            <h2>${character.name}</h2>
            <p>${character.age} Years Old</p>
        </article>
        `;
    
    document.querySelector("#character").insertAdjacentHTML("beforeend", html);
    document.querySelector("#character article:last-child").addEventListener("click", characterClicked);
        
const htmlTable = /*html*/ `
    <tr>
        <td><img src=${character.image}></td>
        <td>${character.name}</td>
        <td>${character.nickname}</td>
        <td>${character.gender}</td>
        <td>${character.age}</td>
        <td>${character.occupation}</td>
    </tr>
    `;

document.querySelector("#tbody").insertAdjacentHTML("beforeend", htmlTable);
document.querySelector("tbody tr:last-child").addEventListener("click", characterClicked);


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
    document.querySelector("#dialog-quote").textContent = `"${character.catchPhrase}"`;

    // Info
     dialog.querySelector("#dialog-nickname").textContent = character.nickname;
     dialog.querySelector("#dialog-occupation").textContent = character.occupation;
     dialog.querySelector("#dialog-age").textContent = character.age;
     dialog.querySelector("#dialog-gender").textContent = character.gender;
     dialog.querySelector("#dialog-haircolor").textContent = character.hairColor;
     dialog.querySelector("#dialog-religion").textContent = character.religion;
     dialog.querySelector("#dialog-grade").textContent = character.schoolGrade;
     dialog.querySelector("#dialog-voicedby").textContent = character.voicedBy;
     dialog.querySelector("#dialog-episodes").textContent = character.episodes;
     dialog.querySelector("#dialog-appearances").textContent = character.appearances;
    dialog.querySelector("#dialog-firstappearance").textContent = character.firstAppearance;
    
    // Show Dialog
        document.querySelector("#dialog-character").showModal();

}






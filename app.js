"use strict"

window.addEventListener("load", initApp)

async function initApp() {
    const randyMarsh =  await getCharacter("data/randy.json");
    const jimmyValmer = await getCharacter("https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json");
    const kyleBroflovski = await getCharacter("https://raw.githubusercontent.com/fili0727/Data-opgave/main/kyle.json");
    const tolkien = await getCharacter("https://raw.githubusercontent.com/Abdiox/South-park1/main/Data/southPark.json");
    const butters = await getCharacter("https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json");
    const timmyBurch = await getCharacter("https://raw.githubusercontent.com/AeselCSS/data-project/main/assets/data/timmy.json");
    const ericCartman = await getCharacter("https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json");
    const luKim = await getCharacter("https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json");
    const chef = await getCharacter("https://raw.githubusercontent.com/emilvn/data-fetch-assignment/main/data/southpark.json");
    const mackey = await getCharacter("https://raw.githubusercontent.com/MaxusTheOne/data_project/main/data/mrMackey.json");
    const christina = await getCharacter("https://raw.githubusercontent.com/Maltemork/south-park-app/main/data/christinaAguilera.json");
    const wendy = await getCharacter("https://raw.githubusercontent.com/osman-butt/data-app/main/wendy.json");
    const kenny = await getCharacter("https://raw.githubusercontent.com/Mart0808DK/Data-fetch-projekt/main/kenny.json");
    const kennedy = await getCharacter("https://raw.githubusercontent.com/rarogbennu/SP/master/data/jfk.json");
    const stan = await getCharacter("https://raw.githubusercontent.com/VARattleff/south-park-viktor/main/sp.json");
    const jackTenorman = await getCharacter("https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json");
    const parisHilton = await getCharacter("https://raw.githubusercontent.com/Tunafan/southpark_db/main/South%20Park%20db/data/paris.json");
    const heatherSwamson = await getCharacter("https://raw.githubusercontent.com/Benjamin-Harris1/Data-app/main/data/heather.json");
    showCharacter(randyMarsh);
    showCharacter(jimmyValmer);
    showCharacter(kyleBroflovski);
    showCharacter(tolkien);
    showCharacter(butters);
    showCharacter(timmyBurch);
    showCharacter(ericCartman);
    showCharacter(luKim);
    showCharacter(chef);
    showCharacter(mackey);
    showCharacter(christina);
    showCharacter(wendy);
    showCharacter(kenny);
    showCharacter(kennedy);
    showCharacter(stan);
    showCharacter(jackTenorman);
    showCharacter(parisHilton);
    showCharacter(heatherSwamson);
}


async function getCharacter(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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
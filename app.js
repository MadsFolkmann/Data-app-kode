"use strict";

window.addEventListener("load", initApp);

let showingGrid;

async function initApp() {
  const allCharacters = await getCharacter("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  showAllCharacters(allCharacters);

  showingGrid = true;
  document.querySelector("#button_change_display").addEventListener("click", changeDisplay);
}

function changeDisplay() {
  console.log(showingGrid);
  if (showingGrid) {
    showingGrid = false;
    console.log(showingGrid);
    document.querySelector("#grid").classList.add("hidden");
    document.querySelector("#table").classList.remove("hidden");
    document.querySelector("#button_change_display").textContent = "Change to Grid";
  } else if (!showingGrid) {
    showingGrid = true;
    document.querySelector("#table").classList.add("hidden");
    document.querySelector("#grid").classList.remove("hidden");
    document.querySelector("#button_change_display").textContent = "Change to Table";
  }
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showAllCharacters(characterList) {
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

  document.querySelector("#grid").insertAdjacentHTML("beforeend", html);
  document.querySelector("#grid article:last-child").addEventListener("click", characterClicked);

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
  // Image
  document.querySelector("#dialog-image").src = character.image;

  // Cacth Phrase and Name
  let catchPhrase = generateCatchPhrase(character);
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-catch-phrase").textContent = catchPhrase;

  // General Info
  let description = generateDescription(character);
  let schoolGrade = generateSchoolGrade(character);

  document.querySelector("#dialog-nickname").textContent = character.nickname;
  document.querySelector("#dialog-occupation").textContent = character.occupation;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-haircolor").textContent = character.hairColor;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-grade").textContent = schoolGrade;
  document.querySelector("#dialog-voicedby").textContent = character.voicedBy;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-characer-description").textContent = description;

  // Show Dialog
  document.querySelector("#dialog-character").showModal();
}

function generateDescription(character) {
  let description = "";
  if (character.appearances && character.firstAppearance) {
    description = `${character.name} first appearance was ${character.firstAppearance} 
    and has featured in ${character.appearances} episodes.`;
  } else if (character.firstAppearance && !character.appearances) {
    description = `${character.name} first appearance was in episode ${character.firstAppearance} `;
  } else if (character.appearances && !character.firstAppearance) {
    description = `${character.name} has featured in ${character.appearances} episodes`;
  }
  return description;
}

function generateCatchPhrase(character) {
  let catchPhrase = "";
  if (character.catchPhrase) {
    catchPhrase = `"${character.catchPhrase}"`;
  } else if (!character.catchPhrase) {
    catchPhrase = "";
  }
  return catchPhrase;
}
function generateSchoolGrade(character) {
  let schoolGrade = "";
  if (character.schoolGrade) {
    schoolGrade = `School grade: ${character.schoolGrade} Grade`;
  } else if (!character.schoolGrade) {
      schoolGrade = `Doesnt go to school`;
      
  }
  return schoolGrade;
}

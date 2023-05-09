
const main = document.querySelector("main");

const displayCharacters = (data) => {
data.forEach((character) => {
// console.log(character);
const content = document.createElement("div");
content.classList.add("content");

const characterInfo = document.createElement("div");
characterInfo.classList.add("characterInfo");

const charImg = document.createElement("img");
charImg.classList.add("charImg");
charImg.setAttribute("src", `${character.image}`);

const charImgLink = document.createElement("a");
charImgLink.setAttribute("href", `/detailsCharacters.html?id=${character.id}`);
charImgLink.appendChild(charImg);

const charName = document.createElement("a");
charName.setAttribute("href", `/detailsCharacters.html?id=${character.id}`);
charName.classList.add("charName");
charName.textContent = character.name;

const charStatus = document.createElement("p");
charStatus.classList.add("charStatus");
charStatus.textContent = character.status;

characterInfo.appendChild(charImgLink);
characterInfo.appendChild(charName);
characterInfo.appendChild(charStatus);

content.appendChild(characterInfo);
main.appendChild(content);

  });
}; 

export default displayCharacters;
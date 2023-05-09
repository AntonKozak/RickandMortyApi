import state from "./state.js";
import {
  listCharactersRickandMortyApi,
  listLocationRickandMortyApi,
  showCharacterDetails,
} from "../js/app.js";

const rout = () => {
  switch (state.currentPage) {
    case "/":
    case "/index.html":
      listCharactersRickandMortyApi();
      break;
    case "/location.html":
      listLocationRickandMortyApi();
      break;
    case "/detailsCharacters.html":
      showCharacterDetails();
      break;
  }
};
console.log(state);
document.addEventListener("DOMContentLoaded", rout);

import state from "./state.js";
import { RickandMortyApi } from "../js/fetchApi.js";
import {
  listCharactersRickandMortyApi,
  listLocationRickandMortyApi,
  showCharacterDetails,
  nextListCharactersRickandMortyApi,
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
    case "/next.html":
      nextListCharactersRickandMortyApi();
      break;
  }
};
// console.log(state);
export default rout;

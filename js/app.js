import rout from "../jstest/routning.js";
import displayCharacters from "./dom.js";
import displayLocationPage from "./domLocation.js";
import displayCharacterDetails from "./domCharactersDetails.js";
import {loadCharactersOnPage, loadLocationOnPage, loadCharacterDetailsOnPage, loadNextCharactersOnPage} from "./gallery.js";

const listCharactersRickandMortyApi = async () => {
    const data = await loadCharactersOnPage();
    displayCharacters(data);
    // console.log(data);
};

const nextListCharactersRickandMortyApi = async () => {
    const data = await loadNextCharactersOnPage();
    displayCharacters(data);
    // console.log(data);
};

const showCharacterDetails = async () => {
    const data = await loadCharacterDetailsOnPage();
    displayCharacterDetails(data);
    // console.log(data);
};

const listLocationRickandMortyApi = async () => {
    const data = await loadLocationOnPage();
    displayLocationPage(data);
    // console.log(data);
};

export {listCharactersRickandMortyApi, listLocationRickandMortyApi, showCharacterDetails, nextListCharactersRickandMortyApi};

document.addEventListener("DOMContentLoaded", rout);

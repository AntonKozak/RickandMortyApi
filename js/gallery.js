import {Character, Location} from "./Characters.js";
import Char from "./Char.js";
import CharDetails from "./CharDetails.js";

// return array with object from class Char(name, image, status) 
const loadCharactersOnPage = async() => {
    const character = new Character();
    const characters = await character.listOfCharacters();
    // console.log(characters.results[0]);
    const charAll = characters.results.map(
        (person) => 
        new Char(person.id, person.name, person.image, person.status)  
    );
    return charAll;

};

const loadNextCharactersOnPage = async() => {
    const character = new Character();
    const characters = await character.listOfCharactersNext();

    const charAll = characters.results.map(
        (person) => 
        new Char(person.id, person.name, person.image, person.status)  
    );
    console.log(charAll);

    return charAll;
};

const loadCharacterDetailsOnPage = async() => {
    const charactersDetail = new Character();
    const details = await charactersDetail.detailsOfCharacters();

    // const person = details.map((pers) => 
    // new CharDetails(pers.name, pers.image, pers.status, pers.gender, pers.location, pers.species, pers.origin ));

   console.log(details);
    return details;
};

//  loadCharactersOnPage();
const loadLocationOnPage = async() => {
    const location = new Location();
    const locations = await location.listOfLocation();
    // console.log(locations);

    const locationAll = locations.results.map((loc) => ({
            namn: loc.name, 
            type: loc.type, 
            dimension: loc.dimension, 
            // resident: loc.residents.map((resident) =>({url: resident})),
    }));
    // console.log(locationAll);
    return locationAll;
};

// loadLocationOnPage();
 export {loadCharactersOnPage, loadLocationOnPage, loadCharacterDetailsOnPage, loadNextCharactersOnPage};
import {RickandMortyApi, RickansMortyLocation} from "./fetchApi.js";

class Character {  
  async listOfCharacters() {
    const api = new RickandMortyApi();
    // console.log(await api.listOfCharacters().info.next);
    // const nextPage = await api.listOfCharacters();
    // console.log(nextPage.info.next);
    return await api.listOfCharacters();
  }

  async listOfCharactersNext() {
    const api = new RickandMortyApi();
    // const nextState = await api.listOfCharactersNext();
    // const nextPage = await nextState.info.next;
    // console.log(await api.listOfCharactersNext());
    return await api.listOfCharactersNext();
  }

  async detailsOfCharacters() {
    const api = new RickandMortyApi();
    return await api.characterDetails();
  }

  // build more Characters/endpoints example list, getById, change, POST ...
}

class Location {
  async listOfLocation() {
    const api = new RickansMortyLocation();
    return await api.listOfLocation();
}
}

export {Character, Location};
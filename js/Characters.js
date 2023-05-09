import {RickandMortyApi, RickansMortyLocation} from "./fetchApi.js";

class Character {  
  async listOfCharacters() {
    const api = new RickandMortyApi();
    return await api.listOfCharacters();
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
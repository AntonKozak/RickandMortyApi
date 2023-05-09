// endpoint for calling API

class RickandMortyApi{
    async listOfCharacters() {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url);
    
        if (response.status === 200) {
            const charactersAll = await response.json();
            // console.log(charactersAll);
            return charactersAll;
        }
      }

    async characterDetails() {
        const characterId = window.location.search.split('=')[1];
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(`${url}/${characterId}`);
    
        if (response.status === 200) {
            const detailsAboutCharacter = await response.json();
            return detailsAboutCharacter;
        }
    }
}


class RickansMortyLocation{
    async listOfLocation() {
        const url = "https://rickandmortyapi.com/api/location";
        const response = await fetch(url);
    
        if (response.status === 200) {
            const locationAll = await response.json();
            // console.log(locationAll);
            return locationAll;
        }
    }
}

export { RickandMortyApi, RickansMortyLocation };
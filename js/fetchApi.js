import fetchData from "../jstest/Http.js";
// endpoint for calling API
class RickandMortyApi{

    async listOfCharacters() {
        // const url = "https://rickandmortyapi.com/api/character";
        // const response = await fetch(url);
        
        const response = await fetchData("character");
        console.log(response);

        if (response.status === 200) {
            const charactersAll = await response.json();
            // console.log(charactersAll);
            return charactersAll;
        }
      }

    async listOfCharactersNext() {
        const response = await fetchData("character");
        // const url = "https://rickandmortyapi.com/api/character";
        // const response = await fetch(url);
        // console.log(response);

        const nextState = await response.json();
        const nextPage = await nextState.info.next;

        const responseNextUrl = await fetch(nextPage);
        
        // console.log(responseNextUrl);
    
        if (responseNextUrl.status === 200) {
            const charactersAll = await responseNextUrl.json();
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
        // const url = "https://rickandmortyapi.com/api/location";
        // const response = await fetch(url);
        const response = await fetchData("location");
        console.log(response);
    
        if (response.status === 200) {
            const locationAll = await response.json();
            // console.log(locationAll);
            return locationAll;
        }
    }
}

export { RickandMortyApi, RickansMortyLocation};
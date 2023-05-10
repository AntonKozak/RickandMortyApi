import state from "./state.js";

const fetchData = async (endpoint) => {
    const API_URL = state.api.baseUrl;
    // console.log(API_URL);

    const response = await fetch(
        `${API_URL}${endpoint}`
    );
    // const data = await response.json();
    // console.log(response);
    return response;
};

export default fetchData;
import axios from 'axios';

// base url to make req to the movies  DB
const instance = axios.create({
    baseURL: "https://images-api.nasa.gov/search?q=",
});

export default instance;
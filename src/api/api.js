import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
    }
});

export default api;
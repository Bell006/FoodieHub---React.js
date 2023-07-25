import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodiehub-api.onrender.com"
});
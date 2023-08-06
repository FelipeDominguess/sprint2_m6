import axios from "axios";

export const api = axios.create({
    baseURL: "https://sprint2.onrender.com",
    timeout: 5000,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
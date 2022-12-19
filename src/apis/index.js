import axios from 'axios';
import { TokenRepository } from 'repository/TokenRepository';
console.log(process.env.REACT_APP_BASE_URL);

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = TokenRepository.getToken();
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

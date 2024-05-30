import { axiosInstance } from './axiosInstance'
import { keys } from "./keys";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${keys.accesToken}`
    }
};

export const MovieLists = {
    nowPlaying: async function () {
        const response = await axiosInstance.get(`/movie/now_playing`, options);
        return response.data
    },
    popular: async function () {
        const response = await axiosInstance.get('/movie/popular', options);
        return response.data
    },
    upcoming: async function () {
        const response = await axiosInstance.get('/movie/upcoming', options);
        return response.data
    },
    topRated: async function () {
        const response = await axiosInstance.get('/movie/top_rated', options);
        return response.data
    }
}
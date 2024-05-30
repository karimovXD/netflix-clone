import { axiosInstance } from './axiosInstance';
import { keys } from "./keys";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${keys.accesToken}`
    }
};

export const Trending = {
    tv: async function () {
        const response = await axiosInstance.get('/trending/tv/week', options);
        return response.data;
    }
}
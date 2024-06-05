import { axiosInstance } from './axiosInstance';
import { keys } from "./keys";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${keys.accesToken}`
    }
};

export const Movies = {
    details: async function (id) {
        const response = await axiosInstance.get(`/movie/${id}`, options);
        return response.data;
    },
    videos: async function (id) {
        const response = await axiosInstance.get(`/movie/${id}/ `, options)
        return response.data;
    },
    recommendations: async function (id) {
        const response = await axiosInstance.get(`/movie/${id}/recommendations`, options)
        return response.data;
    }
}
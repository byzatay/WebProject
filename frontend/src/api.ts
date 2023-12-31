import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL: string = 'http://localhost:8080';

export const fetchData = async (URL: string) => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const updateData = async (URL: string, id: number, updatedData: any) => {
    try {
        const response = await axios.put(`${URL}/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update data');
    }
};

const deleteData = async (URL: string, id: number) => {
    try {
        await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete data');
    }
};

export const fetchNews = async (keyword?: string) => {
    const URL = keyword ? `${API_BASE_URL}/news/search/${keyword}` : `${API_BASE_URL}/news`;
    return fetchData(URL);
};

export const fetchAnnouncement = async (keyword?: string) => {
    const URL = keyword ? `${API_BASE_URL}/announcements/search/${keyword}` : `${API_BASE_URL}/announcements`;
    return fetchData(URL);
};

export const updateNews = async (id: number, updatedData: any) => {
    return updateData(`${API_BASE_URL}/news`, id, updatedData);
};

export const updateAnnouncement = async (id: number, updatedData: any) => {
    return updateData(`${API_BASE_URL}/announcements`, id, updatedData);
};

export const deleteNews = async (id: number) => {
    return deleteData(`${API_BASE_URL}/news`, id);
};

export const deleteAnnouncement = async (id: number) => {
    return deleteData(`${API_BASE_URL}/announcements`, id);
};

export const showToast = (message: string, type: 'success' | 'error') => {
    toast[type](message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const truncateContent = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
};
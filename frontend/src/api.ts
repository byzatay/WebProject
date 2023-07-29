import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Spring Boot API URL'si

export const fetchNews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        console.log(response.data)
        return response.data; // Haber verilerini döndür
    } catch (error) {
        console.error('Haber verileri alınamadı:', error);
        throw error;
    }
};

export const fetchAnnouncement = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/announcements`);
        console.log(response.data)
        return response.data; // Haber verilerini döndür
    } catch (error) {
        console.error('Duyuru verileri alınamadı:', error);
        throw error;
    }
};

export const updateNews = async (id: number, updatedData: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/news/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update news data');
    }
};

export const updateAnnouncement = async (id: number, updatedData: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/announcements/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update news data');
    }
};

export const deleteNews = async (id: number) => {
    try {
        await axios.delete(`${API_BASE_URL}/news/${id}`);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete news data');
    }
};

export const deleteAnnouncement = async (id: number) => {
    try {
        await axios.delete(`${API_BASE_URL}/announcements/${id}`);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete news data');
    }
};
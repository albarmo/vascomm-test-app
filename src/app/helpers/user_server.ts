import axios, { AxiosError } from 'axios';

export const fetchLatestProduct = async (params: string) => {
    try {
        const response = await axios.get('/api/product');
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};


// 'use server'
import axios, { AxiosError } from "axios";

export const logoutAccount = async () => {
    try {
        const response = await axios.post('/api/logout', {});
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};


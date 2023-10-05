// 'use server'
import axios, { AxiosError } from "axios";

export const loginAccount = async (payload: { email: string, password: string }) => {
    try {
        const response = await axios.post('/api/login', payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};


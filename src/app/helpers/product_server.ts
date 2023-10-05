import axios, { AxiosError } from 'axios';

export const fetchProductList = async (params: { limit:string, status:boolean,offset:number, keyword:string}) => {
    const queryString = new URLSearchParams(params).toString();
    console.log(queryString)
    
    try {
        const response = await axios.get(`/api/product?${queryString}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

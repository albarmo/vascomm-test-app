import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const apiUrl = process.env.apiUrl;
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/products?limit=10&status=true&offset=0`,
        });
        return Response.json({...response?.data }, { status: 200 })
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

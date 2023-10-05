import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const apiUrl = process.env.apiUrl;
export async function GET(req: Request, res: NextApiResponse) {
    const url = new URL(req.url)
    const keyword = url.searchParams.get("keyword")
    const limit = url.searchParams.get("limit")
    const offset = url.searchParams.get("offset")
    const status = url.searchParams.get("status")

    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/products`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const apiUrl = process.env.apiUrl;
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/users?limit=10`,
            headers: {
                //
            }
        });
        return Response.json({...response?.data }, { status: 200 })
    } catch (error) {
         return Response.json({error}, { status: 500 })
    }
}

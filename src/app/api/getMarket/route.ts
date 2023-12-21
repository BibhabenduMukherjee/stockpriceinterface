import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
   const data = await req.json();
   console.log();
   
    const options = {
        method: 'GET',
        url: `${process.env.STOCK_API_URL}/1y`,
        params: {ticker: `${data.code}`},
        headers: {
          'X-RapidAPI-Key': `${process.env.STOCK_API_KEY}`,
          'X-RapidAPI-Host': `${process.env.STOCK_API_HOST}`
        }
      };
const response = await axios.request(options)
//console.log(response.data);

return  NextResponse.json({results: response.data} , {status : 200})

}
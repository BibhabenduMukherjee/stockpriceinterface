import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(){
    const options = {
        method: 'GET',
        url: `${process.env.STOCK_API_URL_SECOND}/daily`,
        params: {
          symbol: 'AAPL',
          dateStart: '2022-07-01',
          dateEnd: '2022-09-31'
        },
        headers: {
          'X-RapidAPI-Key': `${process.env.STOCK_API_KEY}`,
          'X-RapidAPI-Host': `${process.env.STOCK_API_HOST_SECOND}`
        }
      };
const response = await axios.request(options)
//console.log(response.data.Results);

return  NextResponse.json({results: response.data.Results} , {status : 200});
}
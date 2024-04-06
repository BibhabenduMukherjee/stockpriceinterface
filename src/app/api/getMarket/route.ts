import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
   const data = await req.json();
   console.log(data);
   
    const options = {
        method: 'GET',
        url: `${process.env.STOCK_API_URL}/1y`,
        params: {ticker: `${data.code}`},
        headers: {
          'X-RapidAPI-Key': `${process.env.STOCK_API_KEY}`,
          'X-RapidAPI-Host': `${process.env.STOCK_API_HOST}`
        }
      };
//const response = await axios.request(options)
//console.log( "server" ,response.data);
const d = { '2024-02-29': {
  Close: 180.75,
  Dividends: 0,
  High: 182.5700073242,
  Low: 179.5299987793,
  Open: 181.2700042725,
  'Stock Splits': 0,
  Volume: 136682600
},
'2024-03-01': {
  Close: 179.6600036621,
  Dividends: 0,
  High: 180.5299987793,
  Low: 177.3800048828,
  Open: 179.5500030518,
  'Stock Splits': 0,
  Volume: 73488000
},
'2024-03-04': {
  Close: 175.1000061035,
  Dividends: 0,
  High: 176.8999938965,
  Low: 173.7899932861,
  Open: 176.1499938965,
  'Stock Splits': 0,
  Volume: 81510100
},
'2024-03-05': {
  Close: 170.1199951172,
  Dividends: 0,
  High: 172.0399932861,
  Low: 169.6199951172,
  Open: 170.7599945068,
  'Stock Splits': 0,
  Volume: 95132400
},
'2024-03-06': {
  Close: 169.1199951172,
  Dividends: 0,
  High: 171.2400054932,
  Low: 168.6799926758,
  Open: 171.0599975586,
  'Stock Splits': 0,
  Volume: 68587700
},
'2024-03-07': {
  Close: 169,
  Dividends: 0,
  High: 170.7299957275,
  Low: 168.4900054932,
  Open: 169.1499938965,
  'Stock Splits': 0,
  Volume: 71765100
},
'2024-03-08': {
  Close: 170.7299957275,
  Dividends: 0,
  High: 173.6999969482,
  Low: 168.9400024414,
  Open: 169,
  'Stock Splits': 0,
  Volume: 76114600
},
'2024-03-11': {
  Close: 172.75,
  Dividends: 0,
  High: 174.3800048828,
  Low: 172.0500030518,
  Open: 172.9400024414,
  'Stock Splits': 0,
  Volume: 60139500
},
'2024-03-12': {
  Close: 173.2299957275,
  Dividends: 0,
  High: 174.0299987793,
  Low: 171.0099945068,
  Open: 173.1499938965,
  'Stock Splits': 0,
  Volume: 59825400
},
'2024-03-13': {
  Close: 171.1300048828,
  Dividends: 0,
  High: 173.1900024414,
  Low: 170.7599945068,
  Open: 172.7700042725,
  'Stock Splits': 0,
  Volume: 52488700
},
'2024-03-14': {
  Close: 173,
  Dividends: 0,
  High: 174.3099975586,
  Low: 172.0500030518,
  Open: 172.9100036621,
  'Stock Splits': 0,
  Volume: 72913500
},
'2024-03-15': {
  Close: 172.6199951172,
  Dividends: 0,
  High: 172.6199951172,
  Low: 170.2899932861,
  Open: 171.1699981689,
  'Stock Splits': 0,
  Volume: 121664700
},
'2024-03-18': {
  Close: 173.7200012207,
  Dividends: 0,
  High: 177.7100067139,
  Low: 173.5200042725,
  Open: 175.5700073242,
  'Stock Splits': 0,
  Volume: 75604200
},
'2024-03-19': {
  Close: 176.0800018311,
  Dividends: 0,
  High: 176.6100006104,
  Low: 173.0299987793,
  Open: 174.3399963379,
  'Stock Splits': 0,
  Volume: 55215200
},
'2024-03-20': {
  Close: 178.6699981689,
  Dividends: 0,
  High: 178.6699981689,
  Low: 175.0899963379,
  Open: 175.7200012207,
  'Stock Splits': 0,
  Volume: 53423100
},
'2024-03-21': {
  Close: 171.3699951172,
  Dividends: 0,
  High: 177.4900054932,
  Low: 170.8399963379,
  Open: 177.0500030518,
  'Stock Splits': 0,
  Volume: 106181300
},
'2024-03-22': {
  Close: 172.2799987793,
  Dividends: 0,
  High: 173.0500030518,
  Low: 170.0599975586,
  Open: 171.7599945068,
  'Stock Splits': 0,
  Volume: 71106600
},
'2024-03-25': {
  Close: 170.8500061035,
  Dividends: 0,
  High: 171.9400024414,
  Low: 169.4499969482,
  Open: 170.5700073242,
  'Stock Splits': 0,
  Volume: 54288300
},
'2024-03-26': {
  Close: 169.7100067139,
  Dividends: 0,
  High: 171.4199981689,
  Low: 169.5800018311,
  Open: 170,
  'Stock Splits': 0,
  Volume: 57388400
},
'2024-03-27': {
  Close: 173.3099975586,
  Dividends: 0,
  High: 173.6000061035,
  Low: 170.1100006104,
  Open: 170.4100036621,
  'Stock Splits': 0,
  Volume: 60273300
},
'2024-03-28': {
  Close: 171.4799957275,
  Dividends: 0,
  High: 172.2299957275,
  Low: 170.5099945068,
  Open: 171.75,
  'Stock Splits': 0,
  Volume: 65672700
},
'2024-04-01': {
  Close: 170.0299987793,
  Dividends: 0,
  High: 171.25,
  Low: 169.4799957275,
  Open: 171.1900024414,
  'Stock Splits': 0,
  Volume: 46240500
},
'2024-04-02': {
  Close: 168.8399963379,
  Dividends: 0,
  High: 169.3399963379,
  Low: 168.2299957275,
  Open: 169.0800018311,
  'Stock Splits': 0,
  Volume: 49329500
},
'2024-04-03': {
  Close: 169.6499938965,
  Dividends: 0,
  High: 170.6799926758,
  Low: 168.5800018311,
  Open: 168.7899932861,
  'Stock Splits': 0,
  Volume: 47602100
}
}

return  NextResponse.json({results:d} , {status : 200})

}
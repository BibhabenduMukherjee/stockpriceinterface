import React from 'react'
import axios from "axios"
import Pre from '../../components/Pre';
import TestUploadCsv from '../../components/TestUploadCsv';
import IntroSelection from "../../components/IntroSelection"
// const options = {
//   method: 'GET',
//   url: `${process.env.STOCK_API_URL}/1mo`,
//   params: {ticker: 'AAPL'},
//   headers: {
//     'X-RapidAPI-Key': `${process.env.STOCK_API_KEY!}`,
//     'X-RapidAPI-Host': 'stock-prices2.p.rapidapi.com'
//   }
// };


async function page() {

//   try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }



 
  return (
    <div className = "flex flex-col space-y-2">
     {/* <Pre preTrainedModelNames = {response.data.preTrainedModelNames}  /> */}
    
       {/* Intro */}
      <IntroSelection />

      <TestUploadCsv />

    </div>
  )
}

export default page
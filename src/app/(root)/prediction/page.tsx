import React from "react";
import axios from "axios";
import Pre from "../../components/Pre";
import TestUploadCsv from "../../components/TestUploadCsv";
import IntroSelection from "../../components/IntroSelection";
import { Collection } from "@/stocks";
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
    <div className="flex flex-col space-y-2 ">
      {/* <Pre preTrainedModelNames = {response.data.preTrainedModelNames}  /> */}

      {/* Intro */}
      <IntroSelection />

      {/* <TestUploadCsv /> */}

      <section className=" max-w-4xl  mx-auto pt-4">
        <div className="grid gap-2 md:gap-x-4 md:gap-y-4 h-screen grid-cols-2">
          {Collection.map((item) => (
            <div
              key={item.code}
              className=" p-3  rounded-md w-[180] h-[230px] md:w-[230px]
               md:h-[260px] hover:cursor-pointer drop-shadow-lg  
                bg-gradient-to-r from-blue-200 from-10%
                 via-sky-200 via-30% to-emerald-200 to-90%"
            >
              <div className="flex flex-col items-center">
                <p className = "font-bold mb-3">{item.name}</p> 
                <div className="max-w-[160px]">
                <p className = "text-sm">Start your trading with {item.name} with the {" "}
                 { item.Change} change rate, last sell {item.lastSale} and with a martket cap {item.MarketCap}
                 </p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;

import IntroSelectionMarket from "@/src/app/components/IntroSelectionMarket";
import axios from "axios";
import React from "react";
import ChartMarket from "@/src/app/components/ChartMarket";
import {dateandvalues, getClose, getDates}  from "../../../../../../lib/helper"
import MonthSelection from "@/src/app/components/MonthSelection";
interface PageProps {
  params: {
    stock: string;
  };
}

async function page({ params }: PageProps) {
  const code = params.stock.split("-")[1]
  
  const s = decodeURIComponent(params.stock).split(" ")[0];
  const {data} = await axios.post("http://127.0.0.1:3000/api/getMarket", {code : code});
  
  const [date , value] = dateandvalues(data.results) 
  //console.log(date);
  
  const cls = value.map((item) => item.Close)
  
  

  return (
    <div className="flex space-y-5 flex-col h-screen">
      <IntroSelectionMarket s={s} />
      <div className = "max-w-4xl  h-[500px]">
     {

    date && value &&  <ChartMarket name={s}  XplaneVals ={date.slice(1,50)}  YPlaneValsClose = {cls.slice(1,50)} borderColor = "red" />

     } 
      </div>
      <section className = "h-[500px] bg-gray-400">
        <MonthSelection/>
      </section>
     
    </div>
  );
}

export default page;

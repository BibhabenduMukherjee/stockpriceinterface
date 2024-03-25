import { datetimeapexformatter, manipulateDate } from '@/dateformaterforapexdatetime';
import StockPercentage from '@/src/app/components/prediction/StockPercentage';
import axios from 'axios';
import dynamic from 'next/dynamic';
import React from 'react'

const PredictedGraph = dynamic(()=> import("@/src/app/components/prediction/PredictedGraph") , {
    ssr : false
})

async function page({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
     console.log()
     console.log(searchParams["userid"])
    
    //const url = new URL(requestHeaders.get('x-forwarded-host') + Request.url());
    const s = new FormData();
    const model = searchParams["modelname"]
    const u = searchParams["userid"]
    s.append("modelName" , `${model}`);
    s.append("userId" , `${u}`) 
   const response = await axios.post("http://127.0.0.1:3001/getPredictions" , s)
   const percentage = await axios.get(`http://127.0.0.1:3001/percentage_change?fileName=${model}&userId=${u}`)
  
   //console.log(manipulateDate('12 Jan 2024', 'one_year')); 
   
   const [dates, lastDate] = datetimeapexformatter(response?.data?.modelData.predictions.dates.slice(0,150))
   
  
  return (
    <div>
        <StockPercentage one_month_change={percentage?.data["1_month_change"]} two_weeks_change={percentage?.data["2_weeks_change"]}  three_months_change={percentage?.data["3_months_change"]}/>
        <PredictedGraph modelName = {searchParams["modelname"]} lastdate = {lastDate} dates = {dates} data = {response?.data?.modelData}/>

    </div>
  )
}

export default page
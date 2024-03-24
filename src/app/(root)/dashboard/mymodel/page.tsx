import { datetimeapexformatter, manipulateDate } from '@/dateformaterforapexdatetime';
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
   console.log(response?.data?.modelData);
   //console.log(manipulateDate('12 Jan 2024', 'one_year')); 
   
   const [dates, lastDate] = datetimeapexformatter(response?.data?.modelData.predictions.dates.slice(0,150))
   console.log(response?.data?.modelData.predictions.realData.length);
   console.log(lastDate);
   
   
  
  return (
    <div>

        <PredictedGraph modelName = {searchParams["modelname"]} lastdate = {lastDate} dates = {dates} data = {response?.data?.modelData}/>

    </div>
  )
}

export default page
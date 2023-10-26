"use client"
import React from 'react'
// import ChartJS from './ChartJS';
import ChartAnother from "./ChartAnother";
interface InComingGData{
    closeval : number[],
    dates : string[],
    highval : number[],
    openval : number[],
    turnover : number[],
}
interface pageProps{
    data : InComingGData
}
function Gdata({data} : pageProps) {
    console.log(data);
    
  return (
    <div className = "grid grid-cols-1 md:grid-cols-1 p-4">
        {/* <ChartJS XplaneVals = {data.closeval} YplaneVals={data.highval}  />
        <ChartJS XplaneVals = {data.closeval} YplaneVals={data.highval}  /> */}
       <ChartAnother XplaneVals={data.dates.slice(1,20)} YplaneVals={data.closeval} title="Close Values"/>
      
    </div>
  )
}

export default Gdata



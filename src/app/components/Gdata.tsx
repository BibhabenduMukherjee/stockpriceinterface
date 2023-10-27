"use client"
import React from 'react'
// import ChartJS from './ChartJS';
import ChartAnotherWithTwoGraph from "./ChartAnother";
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
    <div className = "grid  grid-cols-1 md:grid-cols-1 p-4">
        {/* <ChartJS XplaneVals = {data.closeval} YplaneVals={data.highval}  />
        <ChartJS XplaneVals = {data.closeval} YplaneVals={data.highval}  /> */}
       <ChartAnotherWithTwoGraph titleForGOne={"Close Stocks"} titleForGTwo={"Open Stocks"} XplaneVals={data.dates.slice(1,120)} YPlaneValsClose={data.closeval} YPlaneValsOpen = {data.openval}  height={300} borderColorOne="red" borderColorTwo="blue" backgroundColor={""}/>
       {/* <ChartAnother XplaneVals={data.dates.slice(1,120)} YplaneVals={data.closeval} title="Close Values" height={240} borderColor="red" backgroundColor ="black"/> */}
    </div>
  )
}

export default Gdata



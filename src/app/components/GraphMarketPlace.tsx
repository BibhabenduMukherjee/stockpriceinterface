"use client"
import { useGraphDataH } from '@/hooks/use-data'
import React from 'react'
import ChartMarket from './ChartMarket';

function GraphMarketPlace() {
    const dataG = useGraphDataH();
    const dates = dataG.data.map((item) => item.Date)
    const closes = dataG.data.map((item) => item.Close)
    
  return (
    <div 
     className = " mx-auto bg-pink-300/30"
    >
      {dataG.data.length>0 &&  <p className = "text-red-500 text-center text-3xl p-2">Fetched Data Summary Graph</p>}
        {
            dataG.data.length>0 &&   <ChartMarket name={"s"} XplaneVals={dates} YPlaneValsClose={closes} borderColor={"green"} />
        }
      
    </div>
  )
}

export default GraphMarketPlace
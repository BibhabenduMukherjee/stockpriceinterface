"use client"
import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { cn } from '@/lib/utils';
function ChartComponentSmall({ data, options }) {
  //console.log(`h-[${height}]`);
  return (
    <div className = "" style ={ { width:600 , height:480 }} >
     <Line className= "" data={data} options={options} />
    </div>
   
  )
}

export default ChartComponentSmall
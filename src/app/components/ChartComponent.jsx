"use client"
import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { cn } from '@/lib/utils';
function ChartComponent({ data, options }) {
  //console.log(`h-[${height}]`);
  return (
    <div style={{ width: "90vw", height: `400px` }}>
     <Line data={data} options={options} />
    </div>
   
  )
}

export default ChartComponent
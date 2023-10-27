"use client"
import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { cn } from '@/lib/utils';
function ChartComponent({ data, options, height }) {
  console.log(`h-[${height}]`);
  return (
     <Line className= {`h-[${height}px]`} data={data} options={options} />
  )
}

export default ChartComponent
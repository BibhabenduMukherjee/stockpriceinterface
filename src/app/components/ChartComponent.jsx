"use client"
import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
function ChartComponent({ data, options }) {
  return (
     <Line data={data} options={options} />
  )
}

export default ChartComponent
import React from 'react'
import ChartComponent from "./ChartComponent"
function ChartMarket({name,XplaneVals,borderColor , YPlaneValsClose}) {

    const chartData = {
        labels: XplaneVals,
        datasets: [
          {
            label: `${name}'s TimeSeries`,
            data: YPlaneValsClose,
            fill: true,
            borderColor: borderColor,
            borderWidth: 2.6,
            
            backgroundColor: "pink"
          
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 1, // Customize the point radius in line charts
          },
        },
        scales: {
          x: {
          
            title: {
              display: true,
              text: "X-Axis Label",
            },
          },
          y: {
            
            title: {
              display: true,
              text: "Y-Axis Label",
            },
          },
        },
       
      };
    
  return (
    <div>

        <ChartComponent data={chartData} options={chartOptions}  />
    </div>
  )
}

export default ChartMarket
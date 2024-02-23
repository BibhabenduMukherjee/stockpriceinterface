import React from 'react'
import ChartComponentSmall from "./ChartComponentSmall"
function ChartSmall({name,XplaneVals,borderColor , YPlaneValsClose}) {

    const chartData = {
        labels: XplaneVals,
        datasets: [
          {
            label: `${name}'s TimeSeries`,
            data: YPlaneValsClose,
            fill: true,
            borderColor: borderColor,
            borderWidth: 1.4,
            
            backgroundColor: "transparent"
          
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

        <ChartComponentSmall  data={chartData} options={chartOptions}  />
    </div>
  )
}

export default ChartSmall
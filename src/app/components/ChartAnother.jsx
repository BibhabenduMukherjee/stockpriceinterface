"use client"

import React from 'react'
import ChartComponent from "./ChartComponent";
function ChartAnotherWithTwoGraph({XplaneVals, YPlaneValsClose, YPlaneValsOpen , titleForGOne,titleForGTwo , height,borderColorOne,backgroundColor  , borderColorTwo }) {
    const chartData = {
        labels: XplaneVals,
        datasets: [
          {
            label: titleForGOne,
            data: YPlaneValsClose,
            fill: true,
            borderColor: borderColorOne,
            tension: 0.2,
            backgroundColor: backgroundColor ? backgroundColor : "transparent"
          
          },

          {
            label: titleForGTwo,
            data: YPlaneValsOpen,
            fill: true,
            
            borderColor: borderColorTwo,
            tension: 0.2,
            backgroundColor: backgroundColor ? backgroundColor : "transparent"
          }
        ],
      };
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animateScale :true
      };
    
  return (
    <div>
         <ChartComponent data={chartData} options={chartOptions} height={height}  />
    </div>
  )
}

export default ChartAnotherWithTwoGraph



// export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         yAxisID: 'y',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         yAxisID: 'y1',
//       },
//     ],
//   };
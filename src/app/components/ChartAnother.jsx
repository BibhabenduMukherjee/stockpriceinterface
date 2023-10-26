"use client"

import React from 'react'
import ChartComponent from "./ChartComponent";
function ChartAnother({XplaneVals, YplaneVals , title}) {
    const chartData = {
        labels: XplaneVals,
        datasets: [
          {
            label: title,
            data: YplaneVals,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };
    
  return (
    <div>
         <ChartComponent data={chartData} options={chartOptions}  />
    </div>
  )
}

export default ChartAnother



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
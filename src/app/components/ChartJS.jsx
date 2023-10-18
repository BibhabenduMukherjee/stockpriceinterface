"use client"
import React, { useEffect } from 'react'
import Chart from "chart.js/auto";
import {useRef} from "react"

function ChartJS({dateValues, closeValue}) {
    console.log(closeValue);
    const options = {
        type: "line",
        data: {
          labels: dateValues,
          datasets : [{
            borderWidth: 2,
            radius: 0,
            data : closeValue,
            bordercolor : "red",
            fill : false
          }]
        },
        options: {
          animation : true,
          interaction: {
              intersect: false
          },
          plugins: {
              legend: false
          },
          scales: {
              x: {
                  type: 'category',
                  labels: dateValues
              }
          }
      }
    }
   const elementEl  = useRef(null)
   useEffect(()=>{


    const ctsx  = elementEl.current.getContext("2d");
    const grapg = new Chart(ctsx, options);
    return function cleanup() {
        grapg.destroy();
      };
   } , [])
  return (
    <div>
         <div style={{position:"relative" ,maxWidth : "1000px" , maxHeight: "700px", height : "90vh" , width:"90vw" }}>
            <canvas ref= {elementEl}></canvas>
         </div>
    </div>
  )
}

export default ChartJS
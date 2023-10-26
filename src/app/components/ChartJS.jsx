"use client"
import React, { useEffect } from 'react'
import Chart from "chart.js/auto";
import {useRef} from "react"

function ChartJS({XplaneVals, YplaneVals}) {
    console.log(YplaneVals);
    const options = {
        type: "line",
        data: {
          labels: XplaneVals,
          datasets : [{
            borderWidth: 2,
            radius: 0,
            data : YplaneVals,
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
          responsive: true,
          
          scales: {
              x: {
                  type: 'category',
                  labels: XplaneVals
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
         <div className=" relative w-[300vw] h-[300vh]"  >
            <canvas className="" ref= {elementEl}></canvas>
         </div>
    </div>
  )
}

export default ChartJS
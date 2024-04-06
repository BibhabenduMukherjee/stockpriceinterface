"use client";
import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
import { dateandvalues } from "@/lib/helper";
import axios from "axios";
function ChartMarket({ name, borderColor, YPlaneValsClose,XplaneVals}) {
  // const [XplaneVals, setXplaneVals] = useState([]);
  // const [YPlaneValsClose, setYPlaneValsClose] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function call() {
  //     const cachedData = localStorage.getItem("stockDataStockTrade");
  //     const cachedTimestamp = localStorage.getItem("stockDataTimestamp");
  //     const currentTime = new Date().getTime();
  //     const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds

  //     if (cachedData && currentTime - cachedTimestamp < oneDay) {
  //       // Use cached data
  //       //setStockData(JSON.parse(cachedData));
  //       console.log("Cached Data found in localStorage");
  //       console.log(JSON.parse(cachedData));
  //     } else {
  //       setLoading(true);
  //       const response = await axios.post(`http://localhost:3002/test`, 
          
  //         { code: code },
  //       );
  //       debugger
  //       console.log(response.data);
  //      // console.log(data);
  //       setLoading(false);
  //       //  const [date, value] = dateandvalues(data.results);
  //       //  console.log("Cached Data not-found in localStorage");
  //       //  const cls = value.map((item) => item.Close);
  //       //  let sto = {date: date.slice(-50), value: cls.slice(-50)};
  //       //  localStorage.setItem('stockDataStockTrade', JSON.stringify(sto));
  //       //  setXplaneVals(date.slice(-50))
  //       //  setYPlaneValsClose(cls.slice(-50))
  //     }
  //   }
  //   call();
  // }, []);

  const chartData = {
    labels: XplaneVals,
    datasets: [
      {
        label: `${name}'s TimeSeries`,
        data: YPlaneValsClose,
        fill: true,
        borderColor: borderColor,
        borderWidth: 2.6,

        backgroundColor: "pink",
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
      
        <ChartComponent data={chartData} options={chartOptions} />
      
    </div>
  );
}

export default ChartMarket;

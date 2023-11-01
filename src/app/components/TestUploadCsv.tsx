"use client"
import axios from "axios";
import React from "react";
const data = {
  "2023-10-02": {
    Close: 173.75,
    Dividends: 0,
    High: 174.3000030518,
    Low: 170.9299926758,
    Open: 171.2200012207,
    "Stock Splits": 0,
    Volume: 52164500,
  },
  "2023-10-03": {
    Close: 172.3999938965,
    Dividends: 0,
    High: 173.6300048828,
    Low: 170.8200073242,
    Open: 172.2599945068,
    "Stock Splits": 0,
    Volume: 49594600,
  },
  "2023-10-04": {
    Close: 173.6600036621,
    Dividends: 0,
    High: 174.2100067139,
    Low: 170.9700012207,
    Open: 171.0899963379,
    "Stock Splits": 0,
    Volume: 53020300,
  },
};
function TestUploadCsv() {
  const newData = Object.entries(data).map(([date, values]) => ({
    date,
    ...(values as Record<string, any>),
  }));
  console.log(newData);
  const filename = "nifty50"; // Provide the desired filename

  const apiUrl = "http://127.0.0.1:3001";
  // function fun() {
  //   axios
  //     .post(apiUrl, newData, { params: { filename } })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log("Data saved successfully.");
  //       } else {
  //         console.error("Error:", response.status);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }

  const downloadFile = () => {
    fetch(`${apiUrl}/download_data?filename=${filename}`)
      .then(response => {
        if (response.status === 200) {
          // Trigger the file download
          response.blob().then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
          });
        } else {
          console.error('Error:', response.status);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div>
      <button onClick={downloadFile}>Download</button>
    </div>
  );
}

export default TestUploadCsv;

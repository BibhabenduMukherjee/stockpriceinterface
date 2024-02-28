"use client";
import { useGraphDataH } from "@/hooks/use-data";
import React from "react";
import ChartMarket from "./ChartMarket";
const dd = [
  {
    AdjClose: 177.570007,
    Close: 177.570007,
    Date: "2023-11-02",
    High: 177.779999,
    Low: 175.460007,
    Open: 175.520004,
    Volume: 77334800,
  },
  {
    AdjClose: 173.570007,
    Close: 170.570007,
    Date: "2023-11-03",
    High: 177.779999,
    Low: 155.460007,
    Open: 160.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 171.570007,
    Date: "2023-11-04",
    High: 172.779999,
    Low: 155.460007,
    Open: 169.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 177.570007,
    Date: "2023-11-05",
    High: 178.779999,
    Low: 158.460007,
    Open: 167.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 177.570007,
    Date: "2023-11-06",
    High: 177.779999,
    Low: 155.460007,
    Open: 162.520004,
    Volume: 7733455,
  },
];

function GraphMarketPlace() {
  const dataG = useGraphDataH();
  const dates = dataG.data.map((item) => item.Date);
  const closes = dataG.data.map((item) => item.Close);

  // const dates = dd.map((item) => item.Date)
  // const closes = dd.map((item) => item.Close)
  return (
    <div className=" mx-auto ">
      {dataG.data.length > 0 && (
        <p className="text-orange-500 text-center text-3xl p-2">
          Fetched Data Summary Graph
        </p>
      )}
      {dataG.data.length > 0 && (
        <ChartMarket
          name={"s"}
          XplaneVals={dates}
          YPlaneValsClose={closes}
          borderColor={"green"}
        />
      )}
    </div>
  );
}

export default GraphMarketPlace;

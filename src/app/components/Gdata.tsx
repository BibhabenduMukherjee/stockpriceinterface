"use client";
import React from "react";
// import ChartJS from './ChartJS';
import ChartAnotherWithTwoGraph from "./ChartAnother";
import {TemperatureSelector} from "./Tme";
interface InComingGData {
  closeval: number[];
  dates: string[];
  highval: number[];
  openval: number[];
  turnover: number[];
}
interface pageProps {
  data: InComingGData;
}
function Gdata({ data }: pageProps) {
  console.log(data);

  return (
    <div>
      <div className="flex flex-col space-y-7 bg-blue-100">
        <div className="grid  grid-cols-1 md:grid-cols-1 p-4">
          <ChartAnotherWithTwoGraph
            titleForGOne={"Close Stocks"}
            titleForGTwo={"Open Stocks"}
            XplaneVals={data.dates.slice(1, 220)}
            YPlaneValsClose={data.closeval}
            YPlaneValsOpen={data.openval}
            borderColorOne="red"
            borderColorTwo="blue"
            backgroundColor={""}
          />
        </div>
      </div>

      <section className="flex flex-col max-w-6xl mx-auto mt-5">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-semibold ">
            Get the Prediction From The Above Data
          </p>
        </div>

        <div className = "h-screen flex flex-col  ">
          <TemperatureSelector defaultValue={[0.2]}/>
        </div>
      </section>
    </div>
  );
}

export default Gdata;

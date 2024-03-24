"use client";
import React, { Component } from "react";
import Chart from "react-apexcharts";

import {PredictionGrpTestData} from "../../../../testgfordev"
class UserChartTest extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      options: {
        chart: {
          width: 122,
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: PredictionGrpTestData.dates,
        },
        stroke: {
          width: [2, 2],
          curve: "smooth",
        },
      },
      series: [
        {
          name: "realdata",
          data: PredictionGrpTestData.realdata,
        },
        {
          name: "prediction",
          data: PredictionGrpTestData.prediction,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="  hidden md:block bg-black w-[1800px] mx-auto ">
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={1200}
            type="area"
            height={400}
          />
        </div>

        <div className=" md:hidden bg-black w-[800px] mx-auto">
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={500}
            type="area"
            height={300}
          />
        </div>
      </>
    );
  }
}

export default UserChartTest;

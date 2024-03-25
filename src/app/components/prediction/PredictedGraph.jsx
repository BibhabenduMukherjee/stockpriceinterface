"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { manipulateDate } from "@/dateformaterforapexdatetime";
class PredictedGraph extends React.Component {
  constructor(props) {
    super(props);
    const { modelName, lastdate, dates, data } = this.props;
    console.log(modelName);
    console.log(data.predictions.predictedData.length);
    //console.log(dates);

    this.state = {
      lastdate: lastdate,
      modelname:
        modelName.split("_")[0] == "Ad"
          ? modelName.split("_")[1]
          : modelName.split("_")[0],
      series: [
        {
          type: "line",
          name: "RealDate",
          color: "#d16bdd",
          data: data.predictions.realData,
        },
        {
          type: "area",
          name: "Prediction",
          data: data.predictions.predictedData,
        },
      ],
      options: {
        chart: {
          background: "",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 600,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
          id: "area-datetime",
          type: "area",

          zoom: {
            autoScaleYaxis: true,
          },
        },
        annotations: {
          yaxis: [],
          xaxis: [],
        },
        dataLabels: {
          enabled: false,
        },

        xaxis: {
          type: "datetime",
          categories: dates,
          labels: {
            format: "dd/MM/yyyy",
          },
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
        //   colors: [ "#009562"],
         
          type: "gradient",
          gradient: {
            shade: 'dark',
         
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 0.2,
            stops: [0, 100],
          },
        
        },
      },

      selection: "one_year",
    };
  }

  updateData(timeline, lastdate) {
    this.setState({
      selection: timeline,
    });

    switch (timeline) {
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(manipulateDate(lastdate, "one_month")).getTime(),
          new Date(lastdate).getTime()
        );
        break;
      case "two_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(manipulateDate(lastdate, "two_month")).getTime(),
          new Date(lastdate).getTime()
        );
        break;
      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      default:
    }
  }

  render() {
    return (
      <div className = "flex flex-col gap-6 ">
        {/* <div >
        <div className = " text-black h-[200px] flex flex-col gap-4  mx-auto max-w-4xl p-4">
        <p className = "text-4xl font-bold">{this.state.modelname}</p>
        <div className = "w-full flex justify-around space-x-7 items-start bg-blue-600 h-[50px]">
          <div className = "w-[140px] bg-black">1</div>
          <div className = "w-[140px] bg-black">2</div>
          <div className = "w-[140px] bg-black">3</div>
        </div>
        </div>
       </div> */}
      
        <div id="chart" className = "">
          <div className=" w-[400px] mx-auto">
            <button
              id="one_month"
              onClick={() => this.updateData("one_month", this.state.lastdate)}
              className={
                this.state.selection === "one_month"
                  ? "active bg-black w-[100px] h-[40px] p-2 text-white"
                  : "w-[100px] bg-white p-2 text-black h-[40px]"
              }
            >
              1M
            </button>

            <button
              id="two_month"
              onClick={() => this.updateData("two_month", this.state.lastdate)}
              className={
                this.state.selection === "two_month"
                  ? "active bg-black w-[100px] h-[40px] p-2 text-white"
                  : "w-[100px] bg-white p-2  text-black h-[40px]"
              }
            >
              2M
            </button>
          </div>

          <div id="chart-timeline" className="w-[770px]   max-w-5xl mx-auto">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={500}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PredictedGraph;

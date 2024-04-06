"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';

class PredictedGraphBar extends React.Component {
    constructor(props) {
      super(props);
      const {data}  = this.props
      this.state = {
        series: [
          {
            type: "bar",
            name: "Moving Avg (30d)",
            color: "green",
            data: data.map((item) => Number(item.moving_average).toFixed(2)).slice(-14),
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
           
            categories: data.map((item) => item.date).slice(-14),
          },
          tooltip: {
            
          },
          fill: {
          //  colors: [ "#009562"],

          
          },
        },
  
        selection: "one_year",
      };
    }
  

    render() {
      return (
        <div className = "flex flex-col h-[550px]   ">
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
          <div>
          <p className = "text-3xl text-center">
                Moving Average 30 days window
            </p>
          </div>
          
           
  
            <div id="chart-timeline" className="w-[600px]  mt-10 h-[400px]    max-w-6xl mx-auto">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={400}
              />
            </div>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

export default PredictedGraphBar
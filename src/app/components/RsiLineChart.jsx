"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';

class RsiLineChart extends React.Component {
    constructor(props) {
      super(props);

      const {data}  = this.props

      this.state = {
      
        series: [{
          name: 'Sales',
          data: data.map((item) => item.value)
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7
          },
          stroke: {
            width: 4,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: data.map((item) => item.date),
            tickAmount: 10,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: 'Relative Strength Index',
            align: 'left',
            style: {
              fontSize: "16px",
              color: 'Red'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
            min: 10,
            
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
export default RsiLineChart
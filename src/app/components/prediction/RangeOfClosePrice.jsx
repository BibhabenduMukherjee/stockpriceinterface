"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';
class RangeOfClosePrice extends React.Component {
    constructor(props) {
      super(props);

      const {data} = this.props

      this.state = {
      
        series: [{
          data: data.map((item)=> item.percentage)
          
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
          
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              horizontal: true,
              
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: data.map((item, i) => item.range)
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default RangeOfClosePrice
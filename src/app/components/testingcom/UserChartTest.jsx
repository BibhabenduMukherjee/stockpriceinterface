"use client"
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class UserChartTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart :{
            width  : 122
        }
         ,
        xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
          },
          stroke: {
            width: [2,2],
            curve: 'smooth'
          },
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      },{
        name: 'price',
        data: [300,40,350,50,234,565,4,935,12]
      }],
    
    }
  }

  render() {

    return (
        <>
      <div className=" hidden md:block bg-black w-[1100px] mx-auto ">
        <Chart options={this.state.options} series={this.state.series} width={1100}  type="area"  height={400} />
      </div>
         
      <div className=" md:hidden bg-black w-[800px] mx-auto">
        <Chart options={this.state.options} series={this.state.series} width={500}  type="area"  height={400} />
      </div>

        </>
     
    );
  }
}

export default UserChartTest;
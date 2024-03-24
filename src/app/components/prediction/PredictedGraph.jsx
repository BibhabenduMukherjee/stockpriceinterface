"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
class PredictedGraph extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [
           10,20,30,40        
          ]
        }],
        options: {
          chart: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 600,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            id: 'area-datetime',
            type: 'area',
            height: '700px',
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#000',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#e300bf'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }],
           
          },
          dataLabels: {
            enabled: false
          },
         
          xaxis: {
            
            categories: [2,5,1,80],
            
           
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            colors : "#bfe300",
            opacity : 1,
            type: 'gradient',
            gradient: {
              shade : 'dark',
              shadeIntensity: 0.2,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
        },
      
      
        selection: 'one_year',
      
      };
    }

  
    updateData(timeline) {
      this.setState({
        selection: timeline
      })
    
      switch (timeline) {
        case 'one_month':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'six_months':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'one_year':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'ytd':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'all':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        default:
      }
    }
  

    render() {
      return (
        <div>
          <div id="chart">
            <div class="toolbar">
              <button id="one_month"
                  
                  onClick={()=>this.updateData('one_month')} className={ (this.state.selection==='one_month' ? 'active' : '')}>
                1M
              </button>
               
              <button id="six_months"
                  
                  onClick={()=>this.updateData('six_months')} className={ (this.state.selection==='six_months' ? 'active' : '')}>
                6M
              </button>
               
              <button id="one_year"
                  
                  
                  onClick={()=>this.updateData('one_year')} className={ (this.state.selection==='one_year' ? 'active' : '')}>
                1Y
              </button>
               
              <button id="ytd"
                  
                  onClick={()=>this.updateData('ytd')} className={ (this.state.selection==='ytd' ? 'active' : '')}>
                YTD
              </button>
               
              <button id="all"
                  
                  onClick={()=>this.updateData('all')} className={ (this.state.selection==='all' ? 'active' : '')}>
                ALL
              </button>
            </div>
          
            <div id="chart-timeline" className = "w-[700px] h-auto  max-w-5xl mx-auto">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
          </div>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default PredictedGraph
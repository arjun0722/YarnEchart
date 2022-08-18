import React from 'react'
import ReactEcharts from "echarts-for-react";
import { WineData } from "./ApiData"
function ScatterPlot() {
    const option = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            
              data : WineData.map((item)=>{
                return [item['Color.int'], item.Hue];
              }),
            
            type: 'scatter'
          }
        ]
      };
      return <ReactEcharts option={option} />;
}

export default ScatterPlot;
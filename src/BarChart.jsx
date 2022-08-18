import React from "react";
import ReactEcharts from "echarts-for-react";
import { WineData } from "./ApiData"
function BarChart() {
 
  const option = {
    xAxis: {
        type: "category",
        data: WineData.map((item)=>{
          return item.Alcohol
        })
       
        
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: WineData.map((item)=>{
            return item['Malic.acid']
          }),
          type: "bar",
        },
      ],
    };
    
    
    return <ReactEcharts option={option} />;
    
  }
  export default BarChart
  










  // const [chartData, setChartData] = useState([]);
  // const apiData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   setChartData(await response.json());
  // };
  // console.log(chartData);
  // useEffect(() => {
  //   apiData();
  // }, []);
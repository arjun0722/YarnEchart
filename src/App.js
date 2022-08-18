
import './App.css';
 import BarChart from "./BarChart"
import ScatterPlot from './ScatterPlot';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Manufac Analytics Private Limited</h1>
      <h2 className='titleone'>BarChart</h2>
  <BarChart></BarChart>
  <h3>e “Alcohol” category on horizontal axis and average of “Malic Acid” on vertical axis.</h3>
  <br></br>
  <h2 className='titletwo'>ScatterPlot</h2>
  <ScatterPlot></ScatterPlot>
  <h3>“Color Intensity” on horizontal axis and “Hue” on vertical axis</h3>
    </div>
  );
}

export default App;

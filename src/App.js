import "./App.css";
import BarChart from "./components/bar-chart/Barchats";
import LineChart from "./components/line-chart/Linecharts";

const App = () => {
  return (
    <>
      <main className="App">
      <h1>Data Visualization</h1>
        <section>
        <h2>Line chart</h2>
          <LineChart />
        </section>
        <section>
        <h2>Bar Chart</h2>
          <BarChart />
        </section>
      </main>
    </>
  );
};

export default App;

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoom from "chartjs-plugin-zoom";
Chart.register(...registerables);
Chart.register(zoom);

const HistoricalDataBoxGraph = (props) => {
  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <Line
        className="graph"
        data={{
          labels: props.historicalDataObject[0],
          datasets: [
            {
              label: "Open Price",
              data: props.historicalDataObject[1],
              fill: false,
              borderColor: "rgb(247, 195, 40)",
              responsive: true,
              pointBackgroundColor: "rgb(0,0,0)",
            },
            {
              label: "High Price",
              data: props.historicalDataObject[2],
              fill: false,
              borderColor: "rgb(224, 33, 237)",
              responsive: true,
              pointBackgroundColor: "rgb(0,0,0)",
            },
            {
              label: "Low Price",
              data: props.historicalDataObject[3],
              fill: false,
              borderColor: "rgb(230, 44, 99)",
              responsive: true,
              pointBackgroundColor: "rgb(0,0,0)",
            },
            {
              label: "Close Price",
              data: props.historicalDataObject[4],
              fill: false,
              borderColor: "rgb(41, 217, 230)",
              responsive: true,
              pointBackgroundColor: "rgb(0,0,0)",
            },
            {
              label: "Volume",
              data: props.historicalDataObject[5],
              fill: false,
              borderColor: "rgb(11, 222, 81)",
              responsive: true,
              pointBackgroundColor: "rgb(0,0,0)",
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          elements: {
            point: {
              radius: 3,
            },
            line: {
              borderWidth: 2,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black",
              },
            },
            y: {
              ticks: {
                color: "black",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "black",
              },
            },
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                mode: "xy",
                speed: 100,
              },
              pan: {
                enabled: true,
                mode: "xy",
                speed: 100,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default HistoricalDataBoxGraph;

// src/components/PredictionChart.js
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PredictionChart = ({ predictions, actualPrices }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Predicted Price',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      {
        label: 'Actual Price',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    if (predictions.length > 0 && actualPrices.length > 0) {
      setChartData((prevState) => ({
        ...prevState,
        labels: predictions.map((_, index) => `Property ${index + 1}`),
        datasets: [
          {
            ...prevState.datasets[0],
            data: predictions,
          },
          {
            ...prevState.datasets[1],
            data: actualPrices,
          },
        ],
      }));
    }
  }, [predictions, actualPrices]);

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Price Prediction vs Actual Prices',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Property',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
  };

  return (
    <div>
      <h3>Price Prediction vs Actual Prices</h3>
      {predictions.length > 0 && actualPrices.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>No data available for the chart. Please ensure predictions and actual prices are provided.</p>
      )}
    </div>
  );
};

export default PredictionChart;

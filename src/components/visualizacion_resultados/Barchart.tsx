import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Grafico de Barras Trimestral',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Indicador 1',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(138, 43, 226, 0.5)',
    },
    {
      label: 'Indicador 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Barchart: React.FunctionComponent = () => {
    return( <Bar options={options} data={data} />
    );
};

export default Barchart;

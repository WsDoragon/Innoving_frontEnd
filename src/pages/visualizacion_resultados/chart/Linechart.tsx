import React, { useRef, useCallback } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Grafico de Lineas Semestre',
      },
    },
  };

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


const data = {
  labels,
  datasets: [
    {
      label: "Indicador 1",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Indicado 2",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const Linechart: React.FunctionComponent = () => {
  const barRef = useRef(null);

  const downloadPNG =useCallback (() =>{
    const link = document.createElement("a");
    link.download = "Line.png";
    //link.href = barRef.current.toBase64Image("image/png", 1);
    link.click();
  }, [])

  return(
  <div>
    <Line options={options} data={data} ref={barRef}/>
    <button type="button" onClick={downloadPNG}> Exportar </button>
  </div>);
};
export default Linechart;

import React, { useRef, useCallback } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from 'chart.js';
import { Bar  } from 'react-chartjs-2';
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
const trimestre1 = ['Enero', 'Febrero', 'Marzo'];
const trimestre2 = ['Abril', 'Mayo', 'Junio'];
const trimestre3 = ['Julio', 'Agosto', 'Septiembre'];
const trimestre4 = ['Octubre', 'Noviembre', 'Diciembre'];
const semestre1 = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio'];
const semestre2 = ['Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];


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
    const barRef = useRef(null);

    const downloadPNG =useCallback (() =>{
      const link = document.createElement("a");
      link.download = "bar.png";
      //link.href = barRef.current.toBase64Image("image/png", 1);
      link.click();
    }, [])

    return(
    <div>
      <Bar options={options} data={data} ref={barRef}/>
      <button type="button" onClick={downloadPNG}> Exportar </button>
    </div>);
};

export default Barchart;

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


function getMonthName(monthNumber:any) {    //da nombre a los meses en la tabla
  const date = new Date();
  date.setMonth(monthNumber.Mes - 1);
  return date.toLocaleString('es-ES', { month: 'long' });
}

function infor(listaNums:any){          //otorga las barras
  const lista: number[] = [];
  const largo = listaNums.length;
  for (let x = 0; x < largo; x++)
    lista.push(listaNums[x].valor);
  return lista
}


function parser(data:any){
  const meta = data[1];
  const meses = data[2];
  return [meta,meses]
}

function messs(listaMeses:any){     //creacion de tabla de despliege de barras
  const lista: string[] = [];
  const largo = listaMeses.length;
  for (let x = 0; x < largo; x++)
    lista.push(JSON.stringify(getMonthName(listaMeses[x])));
  return lista
  }

function metaInf(met:any,inf:any){
  const lista: number[] = []
  const largo = inf.length;
  for (let x = 0; x < largo; x++)
    lista.push(met);
  return lista
}



export default function Barchart(informacion:any){
  
  const cos = parser(informacion.labels);
  const indicador = informacion.labels[0].value;
  const meta = informacion.labels[1].cantidad;
  const meses = messs(cos[1])
  const info = infor(cos[1])
  const infoMeta = metaInf(meta,info)

  const data = {
    labels: meses,
    datasets: [{
      data: info,
      label: indicador,
      fill: false,
      backgroundColor: 'rgb(65,105,99 )', //color de barra   
      borderColor: 'rgb(255, 255, 255)',
      tension: 0.1
    },
    {
      data: infoMeta,
      label: 'Meta',
      backgroundColor: 'rgb(137,176,167)', // color de la meta barra
      borderColor: 'rgb(20    , 0, 0)',
      fill: false,
    }
  ],
  };
  
  const options = {
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

    const barRef = useRef(null);


    const downloadPNG =useCallback (() =>{
      let ref: any = "";
      ref = barRef;
      const link = document.createElement("a");
      link.download =  `${informacion.labels[0]} bar.png`;
      link.href = ref.current.toBase64Image();
      link.click();
    }, [])

    return(
    <div>
      <Bar options={options} data={data} ref={barRef}/>
      <div className="exportacion"><button type="submit" onClick={downloadPNG}> Exportar </button></div>
    </div>);
};



import React from 'react'

import HistorialIndicadores from '../../components/Configuración_proyecto/historialPeticion/HistorialIndicadores';
import HistorialMetas from '../../components/Configuración_proyecto/historialPeticion/HistorialMetas';
import { useEffect, useState } from "react";
import axios from "axios";
import clienteAxios from "../../config/axios"


export default function HistorialPeticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);
    const [historial, setHistorial] = useState([]);
    const [ejes, setEjes] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await clienteAxios.get('indicadores/lista');
        setIndicadores(res.data.data);
      };
      fetchPosts();
    }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await clienteAxios.get('metas/lista');
          setMetas(res.data.data);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await clienteAxios.get('historial/lista');
          setHistorial(res.data.data);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('ejes/lista');
          setEjes(res.data.data);
        };
        fetchPosts();
      },[] );

  return (
    <div className="container">
      <h1>Historial de solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <HistorialIndicadores indicadores={indicadores} historial={historial} ejes={ejes}/>

          <h2>Metas</h2>
          <HistorialMetas metas={metas} indicadores={indicadores} historial={historial}/>

        </div>

      </div>
    </div>
  );
}
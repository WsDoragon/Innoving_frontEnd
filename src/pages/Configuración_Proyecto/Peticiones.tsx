import React from 'react'
import { useEffect, useState } from "react";

import ListaIndicadores from '../../components/Configuración_proyecto/peticiones/ListaIndicadores';
import ListaMetas from '../../components/Configuración_proyecto/peticiones/ListaMetas';
import axios from "axios";
import clienteAxios from "../../../config/axios"


import { Link } from "react-router-dom";

export default function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);
    const [ejes, setEjes] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await clienteAxios.get('indicadores/lista');
        setIndicadores(res.data.data);
      };
      fetchPosts();
    }, );

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('metas/lista');
          setMetas(res.data.data);
        };
        fetchPosts();
      }, );

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await clienteAxios.get('ejes/lista');
          setEjes(res.data);
        };
        fetchPosts();
      }, );

  return (
    <div className="container">
      <h1>Solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <ListaIndicadores indicadores={indicadores} ejes={ejes}/>

          <h2>Metas</h2>
          <ListaMetas metas={metas} indicadores={indicadores}/>

          <Link to="/historial-peticiones" className="flex-row historial" style={{color: "green"}}>
            <button className="historial-button">
            Historial
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}
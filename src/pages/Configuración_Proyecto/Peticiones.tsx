import React from 'react'
import { useEffect, useState } from "react";

import ListaIndicadores from '../../components/Configuración_proyecto/peticiones/ListaIndicadores';
import ListaMetas from '../../components/Configuración_proyecto/peticiones/ListaMetas';
import axios from "axios";
import clienteAxios from "../../config/axios"


import { Link } from "react-router-dom";

export default function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);
    const [ejes, setEjes] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://170.187.160.109:3001/indicadores/lista');
        setIndicadores(res.data.data);
      };
      fetchPosts();
    }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://170.187.160.109:3001/metas/lista');
          setMetas(res.data.data);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await clienteAxios.get('http://170.187.160.109:3001/ejes/lista');
          setEjes(res.data.data);
        };
        fetchPosts();
      }, []);

  return (
    <div className="container">
      <h1>Solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <ListaIndicadores 
              indicadores={indicadores} 
              ejes={ejes}
          />

          <h2>Metas</h2>
          <ListaMetas metas={metas} indicadores={indicadores}/>

  
        </div>

      </div>
    </div>
  );
}
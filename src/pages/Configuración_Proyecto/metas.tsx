import React from 'react'
// import TablaMeta from './metas/TablaMeta';
// import AddMeta from './metas/AddMeta';

import TablaMeta from '../../components/Configuración_proyecto/metas/TablaMeta';
import AddMeta from '../../components/Configuración_proyecto/metas/AddMeta';
import { useEffect, useState } from "react";

import axios from "axios";
import clienteAxios from "../../../config/axios"


export default function Metas() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await clienteAxios.get('indicadores/lista');
        setIndicadores(res.data.data);
      };
      fetchPosts();
    }, );

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await clienteAxios.get('metas/lista');
        setMetas(res.data.data);
      };
      fetchPosts();
    }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Meta</h2>
          <AddMeta indicadores={indicadores} metas={metas}/>
        </div>
        <div className="flex-large">
          <h2>Ver Meta</h2>

          <TablaMeta indicadores={indicadores}/>
        </div>
      </div>
    </div>
  );
}
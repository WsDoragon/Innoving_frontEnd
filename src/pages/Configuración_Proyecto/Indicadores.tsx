import React from 'react'
// import TablaIndicadores from "./indicador/TablaIndicadores";
// import AddIndicador from './indicador/AddIndicador';

import TablaIndicadores from '../../components/Configuración_proyecto/indicador/TablaIndicadores';
import AddIndicador from '../../components/Configuración_proyecto/indicador/AddIndicador';
import { useEffect, useState } from "react";

import axios from "axios";
import clienteAxios from "../../../config/axios"
export default function Indicadores() {

  const [indicadores, setIndicadores]  = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clienteAxios.get('indicadores/lista');
      setIndicadores(res.data.data);
    };
    fetchPosts();
  }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Indicador</h2>
          <AddIndicador indicadores ={indicadores}/>
        </div>
        <div className="flex-large">
          <h2>Ver Indicadores</h2>

          <TablaIndicadores/>
        </div>
      </div>
    </div>
  );
}
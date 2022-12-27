import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import clienteAxios from "../../config/axios"


export default function Datos() {

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
      const res = await clienteAxios.get('metas/lista');
      setMetas(res.data.data);
    };
    fetchPosts();
  }, );

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clienteAxios.get('ejes/lista');
      setEjes(res.data.data);
    };
    fetchPosts();
  }, );

  return (
    <div className="container">
        <h2>Indicadores</h2>
      <div className="flex-row">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Calificacion CORFO</th>
                <th>Número del indicador</th>
                <th>Misión Universitaria</th>
                <th>Nombre</th>
                <th>Tipo de indicador</th>
                <th>Eje</th>
                <th>Unidad de medida</th>
                <th>Fuente de información</th>
                <th>Responsable</th>
                <th>Frecuencia de medicion</th>
                <th>Año</th>
                <th>Meta</th>
            </tr>
            </thead>

            <tbody>
        {indicadores.map((indicador : any) => (
            indicador.Aprobado === 1 ?
            <tr key={indicador.id}>
                <td>{indicador.id}</td>
                <td>{indicador.CalificacionCORFO}</td>
                <td>{indicador.NumeroIndicador}</td>
                <td>{indicador.MisionUniversitaria}</td>
                <td>{indicador.nombre}</td>
                <td>{indicador.TipoIndicador}</td>
                {ejes.map((eje : any) => (
                  indicador.eje === eje.id?
                  <td>{eje.nombre}</td>
                  :
                  <></>
                ))}
                <td>{indicador.Unidad}</td>
                <td>{indicador.FuenteInformacion}</td>
                <td>{indicador.Responsable}</td>
                <td>{indicador.Frecuencia}</td>

                <td>
                  {metas.map((meta : any) => (
                      indicador.id === meta.idindicador && meta.Aprobado === 1 ?
                      <div>
                        {meta.fecha}
                      <br/>
                      </div>
                      :
                      <></>
                      ))
                  }
                </td>
                <td>
                  {metas.map((meta : any ) => (
                      indicador.id === meta.idindicador && meta.Aprobado === 1 ?
                      <div>
                      <b>{meta.cantidad}</b>
                      <br/>
                      </div>
                      :
                      <></>
                      ))
                  }
                </td>

            </tr>
            :
            <div/>
            ))
        }
        </tbody>
        </table>
      </div>
    </div>
  );
}
import React from 'react'

import { useEffect, useState } from "react";


import axios from 'axios'
import clienteAxios from '../../../config/axios'


export default function TablaMeta(props : any) {

  const [metas, setMetas] = useState([]);
  const [indicadores, setIndicadores] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clienteAxios.get('indicadores/lista');
      setIndicadores(res.data.data);
    };
    fetchPosts();
  },);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clienteAxios.get('metas/lista');
      setMetas(res.data.data);
    };
    fetchPosts();
  },);

  return (
    <table>
      <thead>
        <tr>
          <th>ID del indicador</th>
          <th>Año</th>
          <th>Meta</th>
        </tr>
      </thead>
      <tbody>
        {metas.map((meta : any) => (
          meta.Aprobado === 2 ?
            <tr style={{ backgroundColor: "#EEEDED", color: "#A7A4A4" }}>
              {meta.antiguaid === '0' ?
                <>
                  {indicadores.map((indicador : any ) => (
                    indicador.id === meta.idindicador ?
                      <td>{indicador.id}</td>
                      :
                      <></>
                  ))}
                </>
                :
                <>
                  {indicadores.map((indicador : any) => (
                    indicador.id === meta.antiguaid && indicador.antiguaid === '0' ?
                      <td>{indicador.id}</td>
                      :
                      indicador.id === meta.antiguaid ?
                        <td>{indicador.antiguaid}</td>
                        :
                        <></>
                  ))}
                </>
              }
              <td>{meta.fecha}</td>
              <td>{meta.cantidad}</td>
              <td>Eliminado</td>
            </tr>
            :
            meta.Aprobado === 1 ?
              <tr>
                <td>{meta.idindicador}</td>
                <td>{meta.fecha}</td>
                <td>{meta.cantidad}</td>
                <td>
                  {/* <button className="button muted-button">Edit</button> */}
                  <button className="button muted-button delete" onClick={() =>
                    clienteAxios.put(`metas/setpeticion/${meta.idindicador}-${meta.fecha}`,
                      window.location.reload())
                  }>Eliminar</button>
                </td>
              </tr>
              :
              meta.Peticion === 'Añadir' ?
                <tr key={meta.idindicador} style={{ backgroundColor: "#c6fbd8ad" }}>
                  <td>{meta.idindicador}</td>
                  <td>{meta.fecha}</td>
                  <td>{meta.cantidad}</td>
                  <td style={{ color: "green" }}>Peticion Añadir</td>
                </tr>
                :
                <tr key={meta.idindicador} style={{ backgroundColor: "#feb6b8a8" }}>
                  <td>{meta.idindicador}</td>
                  <td>{meta.fecha}</td>
                  <td>{meta.cantidad}</td>
                  <td style={{ color: "red" }}>Peticion Eliminar</td>
                </tr>
        ))

        }
      </tbody>
    </table>
  )
}
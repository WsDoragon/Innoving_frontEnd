import { useState,useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ejes, indicadoresResumidos } from '../components/apifake'
import { Buscador, ContenedorBuscador, ContenedorIconBuscador } from './styledUnique/Input/Buscadores';
import { ContenedorItemsAcordeon, ContenedorMiniItems, ContenedorNavbar } from './styledUnique/Contenedores';
import "./navbar.css"
import axios from 'axios';


export const Navbar = () => {

  const [ej, setEj] = useState([])
  const navigate = useNavigate();
  const [ejesIn, setEjesIn] = useState(ejes);
  const [indicadores, setIndicadores] = useState(indicadoresResumidos)

  useEffect( () => {
    axios.get("http://170.187.160.109:3001/api/ai/ejes").then((response) => {
      setEj(response.data)
      setEjesIn(response.data.data);
    }).then(  (e) =>  console.log(ej))
  },[])

  return (
    <ContenedorNavbar >

          {/*
          <ContenedorBuscador> 
            <ContenedorIconBuscador> 
              <i className='bx bx-search'></i>
            </ContenedorIconBuscador>
            <Buscador 
              placeholder='Buscar'
            />
          </ContenedorBuscador>
  */}
          <h2>Ejes</h2>
          <ContenedorItemsAcordeon>
            {ejesIn.map(ejes => {
              return(
              <details className='acordeon' key={ejes.id}>
                <summary>{ejes.nombre}</summary>

                {indicadores.map( indi => {
                  return (
                    (ejes.nombre === indi.eje) ?     
                    <ContenedorMiniItems key={indi.id}>
                      <NavLink 
                      className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                      to={`../prueba/indicador/${indi.id}`}> {indi.nombre}</NavLink>
                    </ContenedorMiniItems>
                    : []
                  )
                })}

                

            </details>
              )
            })}
          </ContenedorItemsAcordeon>
    </ContenedorNavbar>
  )
}

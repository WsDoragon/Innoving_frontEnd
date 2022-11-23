import React from 'react'
import axios from 'axios'
import dateFormat, {masks} from "dateformat";
import swal from 'sweetalert'

import clienteAxios from "../../../../config/axios";

class ListaMetas extends React.Component {    

  state = {
    idMetasA: [],
    idMetasD: [],
  }

  onAprobarClick = () => {
    swal({
        title:"Aprobar",
        text: "¿Estás seguro que deseas aprobar estas solicitudes?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if (respuesta){
            let today = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
            for(let i=0; i < this.state.idMetasA.length ; i++){ 
                clienteAxios.put(`metas/setaprobado/${this.state.idMetasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetasD.length ; i++){ 
                clienteAxios.put(`metas/deletemetas/${this.state.idMetasD[i]}_Eliminar_${today}`)
            }
            this.setState( {
                idMetasA: [],
                idMetasD: [],
                fechasMetasA: [],
                fechasMetasD: [],
              })
            swal({
                text: "Las solicitudes se aceptaron correctamente",
                icon: "success",
                timer: "2000"
            })
        }
    })
  }

  onRechazarClick = () => {
    swal({
        title:"Rechazar",
        text: "¿Estás seguro que deseas rechazar estas solicitudes?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if (respuesta){
            let today = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
            for(let i=0; i < this.state.idMetasA.length ; i++){ 
                clienteAxios.put(`metas/deletemetas/${this.state.idMetasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetasD.length ; i++){ 
                clienteAxios.put(`metas/setaprobado/${this.state.idMetasD[i]}_Eliminar_${today}`)
            }
            this.setState( {
                idMetasA: [],
                idMetasD: []
              })
            swal({
                text: "Las solicitudes se rechazaron correctamente",
                icon: "success",
                timer: "2000"
            })
        }
    })
  }

  AClick = (e : any) => {
    this.state.idMetasA.includes(e.target.value) ? 
                        this.state.idMetasA = this.state.idMetasA.filter((item) => item !== e.target.value) 
                        : 
                        this.state.idMetasA.push(e.target.value);

  }

  DClick = (e : any) => {
    this.state.idMetasD.includes(e.target.value) ? 
                        this.state.idMetasD = this.state.idMetasD.filter((item) => item !== e.target.value)
                        : 
                        this.state.idMetasD.push(e.target.value);

  }

  render(){
    const AStyle = {
        color: 'rgb(48, 147, 59)'
    };

    const DStyle = {
        color: 'rgb(170, 25, 25)'
    };

    return(
    <div>

    <table>
        <thead>
        <tr>
            <th></th>
            <th>ID del Indicador</th>
            <th>Nombre del Indicador</th>
            <th>Año</th>
            <th>Meta propuesta</th>
            <th>Tipo de solicitud</th>
        </tr>
        </thead>
        <tbody>
        {this.props.metas.map((meta : any) => (
            meta.Aprobado === 0 ?

            <tr key={meta.id}>
                {meta.Peticion === 'Añadir' ?
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={
                        e => this.AClick(e)
                        }/>
                </td>
                :
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={
                        e => this.DClick(e)
                        }/>
                </td>
                }
                <td>{meta.idindicador}</td>

                <td>
                    {this.props.indicadores.map((indicador : any) => (
                        indicador.id === meta.idindicador ?
                            <div>
                            {indicador.nombre}
                            </div>
                            :
                            <></>
                    ))}
                </td>
                <td>{meta.fecha}</td>
                <td>{meta.cantidad}</td>


                {meta.Peticion === 'Añadir'?
                    <td style={AStyle}>{meta.Peticion}</td>
                    :
                    <td style={DStyle}>{meta.Peticion}</td>}
            </tr>
            :
            <div/>
            ))
        }
        </tbody>
    </table>
    
    <div className="flex-row" style={{paddingTop : '25px'}}>
        <div>
            <button onClick={
            () => this.onAprobarClick()
            }>Aprobar solicitudes</button>
        </div>
        <div style={{paddingLeft : '50px'}}>
            <button style={{background: 'red',  borderColor: 'red'}}
            onClick={
            () => this.onRechazarClick()
            }>Rechazar solicitudes</button>
        </div>

    </div>

    </div>
        );
  }
}

export default ListaMetas;
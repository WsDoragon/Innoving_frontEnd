import React from 'react'
import axios from 'axios'
import dateFormat, {masks} from "dateformat";
import swal from 'sweetalert'

class ListaMetas extends React.Component<any,any> {    

  state = {
    idMetasA: [],
    idMetasD: [],
    idMetasE: []
  }

  onAprobarClick = () => {
    swal({
        title:"Aprobar",
        text: "¿Estás seguro que deseas aprobar estas solicitudes?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if (respuesta){
            let today = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss').toString();
            for(let i=0; i < this.state.idMetasA.length ; i++){ 
                axios.put(`http://170.187.160.109:3001/metas/setaprobado/${this.state.idMetasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetasD.length ; i++){ 
                axios.put(`http://170.187.160.109:3001/metas/deletemetas/${this.state.idMetasD[i]}_Eliminar_${today}`)
            }
            for(let i=0; i < this.state.idMetasE.length ; i++){ 
                let e : any = this.state.idMetasE[i];
                let ids_aux = e.split(",");
                
                let id_eliminar = ids_aux[1];
                let id_reemplazar = ids_aux[0];
                
                axios.delete(`http://170.187.160.109:3001/metas/eliminarmeta/${id_eliminar}_${id_reemplazar}`)
                axios.put(`http://170.187.160.109:3001/metas/setaprobado/${id_reemplazar}_Editar_${today}`)
            }
            this.setState( {
                idMetasA: [],
                idMetasD: [],
                fechasMetasA: [],
                fechasMetasD: [],
              })
              swal({
                text: "'Solicitud enviada correctamente'",
                icon: "success",
                timer: 2000
              }).then(function(){ 
                //window.location.reload();
                }
              )
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
                axios.put(`http://170.187.160.109:3001/metas/deletemetas/${this.state.idMetasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetasD.length ; i++){ 
                axios.put(`http://170.187.160.109:3001/metas/setaprobado/${this.state.idMetasD[i]}_Eliminar_${today}`)
            }
            for(let i=0; i < this.state.idMetasE.length ; i++){ 
                let e  : any = this.state.idMetasE[i];
                let ids_aux = e.split(",");
                let id_reemplazar = ids_aux[0];
                let id = ids_aux[1];
                axios.delete(`http://170.187.160.109:3001/metas/eliminarmetaeditado/${id_reemplazar}_${id}_${today}`)
            }
            this.setState( {
                idMetasA: [],
                idMetasD: []
              })
              swal({
                text: "'Solicitud enviada correctamente'",
                icon: "success",
                timer: 2000
              }).then(function(){ 
                window.location.reload();
                }
              )
        }
    })
  }

  AClick = (e : any ) => {
    this.state.idMetasA.includes(e.target.value as never) ? 
                        this.state.idMetasA = this.state.idMetasA.filter((item) => item !== e.target.value) 
                        : 
                        this.state.idMetasA.push(e.target.value as never);

  }

  DClick = (e : any) => {
    this.state.idMetasD.includes(e.target.value as never) ? 
                        this.state.idMetasD = this.state.idMetasD.filter((item) => item !== e.target.value)
                        : 
                        this.state.idMetasD.push(e.target.value as never );

  }

  render(){
    const AStyle = {
        color: 'rgb(48, 147, 59)'
    };

    const DStyle = {
        color: 'rgb(170, 25, 25)'
    };

    const EStyle = {
        color: 'rgb(64, 168, 248)'
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

                : meta.Peticion === 'Eliminar' ?
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
                :
                <td>
                <input
                className='checkbox'
                type="checkbox"
                name="lang"
                value={[meta.id, meta.antiguaid]}
                onChange={(e : any )=> this.state.idMetasE.includes(e.target.value as never) ? this.state.idMetasE = this.state.idMetasE.filter((item) => 
                    item !== e.target.value) 
                    : 
                    this.state.idMetasE.push(e.target.value as never)
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
                    : meta.Peticion === 'Eliminar'?
                    <td style={DStyle}>{meta.Peticion}</td>
                    :
                    <td style={EStyle}>{meta.Peticion}</td>}

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
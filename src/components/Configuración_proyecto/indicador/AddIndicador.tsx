import React from 'react'
import swal from 'sweetalert'

import axios from "axios";
import clienteAxios from '../../../config/axios';

class AddIndicador  extends React.Component<any , any > {

  state = {
    CalificacionCORFO : 'Mínimo',
    NumeroIndicador: '',
    MisionUniversitaria : 'Primera',
    nombre : '',
    TipoIndicador: 'Entrada resultado',
    eje : 1,
    Unidad : '',
    FuenteInformacion : '',
    Responsable: '',
    Frecuencia: 'Mensual',

    usado: false, 
    num: false,
    nom: false,
    uni: false,
    fuent: false,
    resp: false
  }

  onAddClick = () => {
    var usado = false;

    this.props.indicadores.map((x : any)  => x.id === (this.state.CalificacionCORFO.charAt(0) + this.state.NumeroIndicador) ?
      usado = true
      :x)

    if(this.state.NumeroIndicador === '' || this.state.nombre === '' ||this.state.Unidad === '' || this.state.FuenteInformacion === '' || this.state.Responsable === '' || usado){
      if (usado){
        this.setState( {
          usado : true,
        })
      }else{
        this.setState( {
          usado : false,
        })  
      }
      if (this.state.NumeroIndicador === ''){
        this.setState( {
          num : true,
        })
      }else{
        this.setState( {
          num : false,
        })  
      }
      if (this.state.nombre === ''){
        this.setState( {
          nom : true,
        })
      }else{
        this.setState( {
          nom : false,
        })  
      }
      if (this.state.Unidad === ''){
        this.setState( {
          uni : true,
        })
      }else{
        this.setState( {
          uni : false,
        })  
      }
      if (this.state.FuenteInformacion === ''){
        this.setState( {
          fuent : true,
        })
      }else{
        this.setState( {
          fuent : false,
        })  
      }
      if (this.state.Responsable === ''){
        this.setState( {
          resp : true,
        })
      }else{
        this.setState( {
          resp : false,
        })  
      }

      swal({
        text: "Error! los campos no se llenaron correctamente",
        icon: "error",
        timer: 2000
      })

    }else{

        clienteAxios.post('/indicadores/addindicadores',{
        id: (this.state.CalificacionCORFO.charAt(0) + this.state.NumeroIndicador),
        CalificacionCORFO : this.state.CalificacionCORFO,
        NumeroIndicador : this.state.NumeroIndicador,
        MisionUniversitaria : this.state.MisionUniversitaria,
        nombre : this.state.nombre,
        TipoIndicador: this.state.TipoIndicador,
        eje : this.state.eje,
        Unidad : this.state.Unidad,
        FuenteInformacion : this.state.FuenteInformacion,
        Responsable : this.state.Responsable,
        Frecuencia : this.state.Frecuencia,
      })

      this.setState( {
        CalificacionCORFO : 'Mínimo',
        NumeroIndicador: '',
        MisionUniversitaria : 'Primera',
        nombre : '',
        TipoIndicador: 'Entrada resultado',
        eje : 'Gobernanza y Sinergias',
        Unidad : '',
        FuenteInformacion : '',
        Responsable: '',
        Frecuencia: 'Mensual',

        num: false,
        nom: false,
        uni: false,
        fuent: false,
        resp: false,
        usado: false
      })
      swal({
        text: "'Solicitud enviada correctamente'",
        icon: "success",
        timer: 2000
      })

    }
  }

  render(){
    return(
      <>
      <form>
        <label>Calificación CORFO</label>
        <select value={this.state.CalificacionCORFO} onChange={e => this.setState({
          CalificacionCORFO: e.target.value
        })}>
          <option value="Mínimo">Mínimo</option>
          <option value="Crítico">Crítico</option>
        </select>

        <label>Número de Indicador</label>
        {this.state.usado?
          <>
          <input type="text" value={this.state.NumeroIndicador} style={{borderColor: 'red'}} onChange={e => this.setState({
          NumeroIndicador: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Ya existe un Indicador con esa id</p>
          </>
        : this.state.num?
          <>
          <input type="text" value={this.state.NumeroIndicador} style={{borderColor: 'red'}} onChange={e => this.setState({
          NumeroIndicador: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.NumeroIndicador} onChange={e => this.setState({
            NumeroIndicador: e.target.value
          })}/>
        }
        
        <label>Misión Universitaria</label>
        <select value={this.state.MisionUniversitaria} onChange={e => this.setState({
          MisionUniversitaria: e.target.value
        })}>
          <option value="Primera">Primera</option>
          <option value="Segunda">Segunda</option>
          <option value="Tercera">Tercera</option>
          <option value="General">General</option>
        </select>

        <label>Nombre del indicador</label>
        {this.state.nom?
          <>
          <input type="text" value={this.state.nombre}  style={{borderColor: 'red'}}onChange={e => this.setState({
            nombre: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.nombre} onChange={e => this.setState({
            nombre: e.target.value
          })}/>
        }

        <label>Tipo de Indicador</label>
        <select value={this.state.TipoIndicador} onChange={e => this.setState({
          TipoIndicador: e.target.value
        })}>
          <option value="Entrada resultado">Entrada resultado</option>
          <option value="Resultado">Resultado</option>
          <option value="Proceso">Proceso</option>
          <option value="Impacto">Impacto</option>
        </select>

        <label>Eje al que pertenece</label>
        <select value={this.state.eje} onChange={e => this.setState({
          eje: e.target.value
        })}>
          <option value={1}>Gobernanza y Sinergias</option>
          <option value={2}>Gestión del Cambio y Capital Humano Avanzado</option>
          <option value={3}>I+D Aplicado y Vínculo con Sector Productivo</option>
          <option value={4}>Comercialización de Tecnología y Emprendimiento de Base Tecnológica</option>
          <option value={5}>Alianzas Internacionales</option>
          <option value={6}> Armonización Curricular y postgrados tecnológicos</option>
        </select>

         <label>Unidad de medida</label>

        {this.state.uni?
          <>
          <input type="text" value={this.state.Unidad} style={{borderColor: 'red'}} onChange={e => this.setState({
            Unidad: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.Unidad} onChange={e => this.setState({
            Unidad: e.target.value
          })}/>
        }

        <label>Fuente de Informacion</label>

        {this.state.fuent?
          <>
          <input type="text" value={this.state.FuenteInformacion} style={{borderColor: 'red'}} onChange={e => this.setState({
            FuenteInformacion: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
        <input type="text" value={this.state.FuenteInformacion} onChange={e => this.setState({
          FuenteInformacion: e.target.value
        })}/>
        }

        <label>Responsable</label>

        {this.state.resp?
          <>
          <input type="text" value={this.state.Responsable} style={{borderColor: 'red'}} onChange={e => this.setState({
            Responsable: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.Responsable} onChange={e => this.setState({
            Responsable: e.target.value
          })}/>
        }
        
        <label>Frecuencia de medición</label>
        <select value={this.state.Frecuencia} onChange={e => this.setState({
          Frecuencia: e.target.value
        })}>
          <option value="Mensual">Mensual</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>
        
      </form>
      <button onClick={
          () => this.onAddClick()
        }>Enviar solicitud</button>
      </>
    );
  }
}

export default AddIndicador;
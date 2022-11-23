import React from 'react'
import swal from 'sweetalert'

import axios from 'axios'
import clienteAxios from '../../../../config/axios'


class AddMeta extends React.Component {

  state = {
    idindicador : '',
    fecha: '2035',
    cantidad: '',
    id: false,
    cant: false,
    num: false,
    usado: false
  }

  onAddClick = () => {
      const regex = /^[0-9]*$/;
      var usado = false;

      this.props.metas.map((x : any ) => x.idindicador === this.state.idindicador && x.fecha === this.state.fecha ?
        usado = true
        :x)
        
      if(this.state.idindicador === '' || this.state.cantidad === '' || usado || !regex.test(this.state.cantidad)){
        if (usado){
          this.setState( {
            usado : true,
          })
        }else{
          this.setState( {
            usado : false,
          })  
        }
        if (this.state.idindicador === ''){
          this.setState( {
            id : true,
          })
        }else{
          this.setState( {
            id : false,
          })  
        }
        if (this.state.cantidad === ''){
          this.setState( {
            cant : true,
          })
        }else{
          this.setState( {
            cant : false,
          })  
        }if(!regex.test(this.state.cantidad)){
          this.setState( {
            num : true,
          })
        }else{          
          this.setState( {
            num : false,
          })
        }
        swal({
          text: "Error! los campos no se llenaron correctamente",
          icon: "error",
          timer: "2000"
        })
      }else{
        clienteAxios.post('metas/addmetas',{
          idindicador : this.state.idindicador,
          fecha : this.state.fecha,
          cantidad : parseInt(this.state.cantidad)
        })
  
        this.setState( {
          idindicador : '',
          fecha: '2035',
          cantidad: '',
          id: false,
          cant: false,
          num: false,
          usado: false
        })
        swal({
          text: "'Solicitud enviada correctamente'",
          icon: "success",
          timer: "2000"
        })
      }
  
  }

  render(){
    return(
      <>
      <form>

      <label>Indicador</label>
        {this.state.id?
        <>
        <select value={this.state.idindicador} style={{borderColor: 'red'}} onChange={e => this.setState({
          idindicador: e.target.value
        })}>
          <option value={0}>-</option>
          {this.props.indicadores.map((x : any, i : any) =>
          x.Aprobado === 1 ?
          <option value={x.id}>{x.id} ㅤㅤㅤㅤ  {x.nombre}</option>
          :
          <div/>
          )}
        </select>
        <p style={{fontSize: '12px'}}>No se ha seleccionado ningún Indicador</p>
        </>        
        :
        <select value={this.state.idindicador} onChange={e => this.setState({
          idindicador: e.target.value
        })}>
          <option value={0}>-</option>
          {this.props.indicadores.map((x : any, i : any) =>
          x.Aprobado === 1 ?
          <option value={x.id}>{x.id} ㅤㅤㅤㅤ  {x.nombre}</option>
          :
          <div/>
          )}
        </select>
        }

        <label>Año de la meta</label>
        {this.state.usado?
        <>
        <select value={this.state.fecha} style={{borderColor: 'red'}} onChange={e => this.setState({
          fecha: e.target.value
        })}>
          {/* <option value="">-</option> */}
          <option value="2035">2035</option>
          <option value="2034">2034</option>
          <option value="2033">2033</option>
          <option value="2032">2032</option>
          <option value="2031">2031</option>
          <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
        <p style={{fontSize: '12px'}}>Ya existe una meta para ese año</p>
        </>
        :
        <select value={this.state.fecha} onChange={e => this.setState({
          fecha: e.target.value
        })}>
          <option value="2035">2035</option>
          <option value="2034">2034</option>
          <option value="2033">2033</option>
          <option value="2032">2032</option>
          <option value="2031">2031</option>
          <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
        }

        <label>Meta propuesta </label>
        {this.state.cant?
        <>
        <input type="text" value={this.state.cantidad} style={{borderColor: 'red'}} onChange={e => this.setState({
          cantidad: e.target.value
        })}/>
        <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
        </>
        : this.state.num?
        <>
        <input type="text" value={this.state.cantidad} style={{borderColor: 'red'}} onChange={e => this.setState({
          cantidad: e.target.value
        })}/>
        <p style={{fontSize: '12px'}}>Solo se deben ingresar números</p>
        </>
        :
        <input type="text" value={this.state.cantidad} onChange={e => this.setState({
          cantidad: e.target.value
        })}/>
        }
  
      </form>
      <button onClick={
        () => this.onAddClick()
      }>Enviar solicitud</button>
      </>
);
  }
}

export default AddMeta;



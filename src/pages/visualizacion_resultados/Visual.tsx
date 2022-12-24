import './Visual.css';
import React, {useState} from 'react';
import { Button, Container, Col, Row, Input} from 'reactstrap';
import Barchart from './chart/Barchart';
import Gauge from './chart/Gaugechart';
import Linechart from './chart/Linechart';
import Select from "react-select";




const otpT = [
  {value: "barra",label: "Barras"},
  {value: "linea",label: "Lineas"}
];

const otpP = [
  {value: "trimestre",label: "Trimestre"},
  {value: "semestre",label: "Semestre"}
];

const otpI = [
  {value: "indicador1",label: "Indicador1"},
  {value: "indicador2",label: "Indicador2"},
  {value: "indicador3",label: "Indicador3"}
];

function Visual(this: any) {
  const [val,setValue] = useState(null);
  const [val1,setValue1] = useState(null);
  const [val2,setValue2] = useState(null);
  const [val3,setValue3] = useState(null);
  const [show, setShow] = useState(true);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  
  const openCloseDropdown1=()=>{
    setDropdown1(!dropdown1);
  }
  const openCloseDropdown2=()=>{
    setDropdown2(!dropdown2);
  }

  const handleSelectChange = (value: any) =>{
    console.log(value);
    setValue(value);
  }

  const handleSelectChange1 = (value: any) =>{
    console.log(value);
    setValue1(value);
  }
  const handleSelectChange2 = (value: any) =>{
    console.log(value);
    setValue2(value);
  }

  const handleSelectChange3 = (value: any) =>{
    console.log(value);
    setValue3(value);
  }

  function multT(tipo: any,periodo: any,indicador: any,fecha:any){
    if (Object.values(tipo)[0] == "barra") {
      setShow(true);
    }else{
      setShow(false);
    }
    //aqui iria la llamada de datos

    //funcion que parsea los datos obtenidos
    
    return(
      console.log(Object.values(tipo)[0],Object.values(periodo)[0],Object.values(indicador)[0],Object.values(fecha)[0])
      
    )
  }

  return (
    <Container fluid >
      <Row>
      <Col sm={8}>
      
        <div className='container1'>
            {show ?(<div className='graph'> <Barchart/></div>
              ):(
                <div className='graph'> <Linechart/></div>

              )}
            <div className='containerButtoms'>
              <div className= 'dropdown1' >
                <Select value={val} defaultValue={otpT[0]} options={otpT} onChange={handleSelectChange}/>
              </div>
              <div className= 'dropdown1'> 
                <Select value={val1} defaultValue={otpP[0]} options={otpP} onChange={handleSelectChange1}/>
              </div>
              <div className= 'dropdown1'> 
                <Select value={val2} defaultValue={otpI[0]} options={otpI} onChange={handleSelectChange2}/>
              </div>
              <div className= 'dropdown1' > 
                <Input type="date" onChange={handleSelectChange3}/> 
              </div>
              <div className= 'boton' > <Button color='success' onClick={()=>multT(val,val1,val2,val3)} > Graficar </Button> </div>
            </div>
          </div>
      </Col>
      <Col sm={4}>
        <div className='container2'>
            <div> 
              <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4>
              <Gauge/>
            </div>
          </div>
      </Col>
      </Row>
    </Container>
  );
}

export default Visual;

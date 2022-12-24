import './Visual.css';
import React, {useRef, useState} from 'react';
import { Button, Container, Col, Row} from 'reactstrap';
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

function Visual(this: any) {
  const [val,setValue] = useState(null);
  const [val1,setValue1] = useState(null);
  const [tablaT, tableTipo] = useState(true);
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
  function multT(tipo: any,periodo: any){
    if (Object.values(tipo)[0] == "barra") {
      setShow(true);
    }else{
      setShow(false);
    }
    //aqui iria la llamada de datos

    //funcion que parsea los datos obtenidos
    
    return(
      console.log(Object.values(tipo)[0],Object.values(periodo)[0])
      
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
              <div className= 'dropdown2'> 
                <Select value={val1} defaultValue={otpP[0]} options={otpP} onChange={handleSelectChange1}/>
              </div>
              <div  id='tipe'> <Button className='buttom' color='success' onClick={()=>multT(val,val1)} > Graficar </Button> </div>
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

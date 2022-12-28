import './Visual.css';
import React, {useState} from 'react';
import { Button, Container, Col, Row} from 'reactstrap';
import axios from 'axios';
import Barchart from './chart/Barchart';
import Gauge from './chart/Gaugechart';
import Linechart from './chart/Linechart';
import Select from "react-select";
import GaugeChart from "react-gauge-chart";

const semestre = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio'];

const dataExp = [
  [{"cantidad":2}],
  [
    {"Mes":1,"valor":1},
    {"Mes":2,"valor":4},
    {"Mes":3,"valor":1},
    {"Mes":4,"valor":2},
    {"Mes":5,"valor":1},
    {"Mes":6,"valor":3},
    {"Mes":7,"valor":5},
    {"Mes":8,"valor":2},
    {"Mes":9,"valor":3},
    {"Mes":10,"valor":1},
    {"Mes":11,"valor":3},
    {"Mes":12,"valor":2}
  ]]

const otpT = [
  {value: "barra",label: "Barras"},
  {value: "linea",label: "Lineas"}
];

const otpP = [
  {value: "0,5",label: "1° Semestre"},
  {value: "6,11",label: "2° Semestre"},
  {value: "0,2",label: "1° Trimestre"},
  {value: "3,5",label: "2° Trimestre"},
  {value: "6,8",label: "3° Trimestre"},
  {value: "9,11",label: "4° Trimestre"}

];  

const otpI = [
  {value: "indicador1",label: "Indicador1"},
  {value: "indicador2",label: "Indicador2"},
  {value: "indicador3",label: "Indicador3"}
];

const otpA = [
  {value: "2015",label: "2015"},
  {value: "2016",label: "2016"},
  {value: "2017",label: "2017"},
  {value: "2018",label: "2018"},
  {value: "2019",label: "2019"},
  {value: "2020",label: "2020"},
  {value: "2021",label: "2021"}
];

function Visual(this: any) {

  const [val,setValue] = useState(otpT[0]);
  const [val1,setValue1] = useState(otpP[0]);
  const [val2,setValue2] = useState(otpI[0]);
  const [semestre1,setSemestre1] = useState(semestre);
  const [val3, setValue3]= useState(otpA[0])
  const [show, setShow] = useState(true);
  const [meta1,setMeta1] = useState(0);
  const [meta2,setMeta2] = useState(0);
  const [meta3,setMeta3] = useState(0);
  const [mes1,setMes1] = useState(0);
  const [mes2,setMes2] = useState(0);
  const [mes3,setMes3] = useState(0);
  

  const [met,setMet] = useState();
  const [mes,setMes] = useState();
  const [porcentaje,setPorcentaje] = useState(0);
  const [state, setState] = useState({
    anio: "2022",
  });



  function parser(data:any,periodo:any,indicador:any){
    console.log("owo")
    console.log(data)
    const metaa = data[0];
    const mesa = data[1];

    const per = periodo.value.split(",");
    let part2: number;
    const part1: number = per[0];
    part2 = +per[1];
    const messs = mesa.slice(part1,part2+1);
    return [indicador,metaa,messs]
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

  const handleSelectChange3 = (val: any) =>{
    console.log(val);
    setValue3(val);

  }

  async function llamado(cod:any){

    const info = await axios.post('http://170.187.160.109:3001/variables/'+cod,state).then(res=>{
      const data = res.data.data;
      var meta = data[0][0];
      meta = meta.cantidad;
      setMet(meta);
      const mes = data[1];
      setMes(mes);

    } ,error=>{
      console.log(error)
    });
    //console.log("holawa");
    //console.log(info.data.data)


    }

  async function llamado25(){
    const info = await axios.post('http://170.187.160.109:3001/variables/M25',state).then(res=>{
      const data = res.data.data;
      const meta = data[0][0].cantidad;
      const mesa = data[1];
      var suma = 0;
      
      for (const k in mesa) {
        var numS = mesa[k].Valor;
        var numN = +numS;
        suma = suma + numN
      }

      setMeta1(meta)
      setMes1(suma)
      //console.log(num)
      //setMes1(num)
    } ,error=>{
      console.log(error)
    });
    //console.log("holawa");
    //console.log(info.data.data)
    }

    async function llamado26(){
      const info = await axios.post('http://170.187.160.109:3001/variables/M26',state).then(res=>{
        const data = res.data.data;
        const meta = data[0][0].cantidad;
        const mesa = data[1];
        var suma = 0;
        
        for (const k in mesa) {
          var numS = mesa[k].Valor;
          var numN = +numS;
          suma = suma + numN
        }

        setMeta2(meta)
        setMes2(suma)
        //console.log(num)
        //setMes1(num)
      } ,error=>{
        console.log(error)
      });
      //console.log("holawa");
      //console.log(info.data.data)
      }

      async function llamado49(){
        const info = await axios.post('http://170.187.160.109:3001/variables/M49',state).then(res=>{
          const data = res.data.data;
          const meta = data[0][0].cantidad;
          const mesa = data[1];
          var suma = 0;
          
          for (const k in mesa) {
            var numS = mesa[k].Valor;
            var numN = +numS;
            suma = suma + numN
          }

          setMeta3(meta)
          setMes3(suma)
          //console.log(num)
          //setMes1(num)
        } ,error=>{
          console.log(error)
        });
        //console.log("holawa");
        //console.log(info.data.data)
        }
  
  function gaugePorcentage(){
    llamado25();
    llamado26();
    llamado49();
    console.log("metas")
    var porcent = ((mes1/meta1)+(mes2/meta2)+((mes3/meta3)))/100
    console.log(porcent)
    setPorcentaje(porcent)
  }

  function multT(tipo: any,periodo: any,indicador: any,fecha:any){
    var c = "M25";
    if (Object.values(tipo)[0] === "barra") {
      setShow(true);
    }else{
      setShow(false);
    }

    if ("indicador1" == val2.value){
      c = "M25"

    }else if ("indicador2" == val2.value){
      c = "M26"

    }else if ("indicador3" == val2.value){
      c = "M27"

    }
    //gaugePorcentage();
    setState({anio: val3.value});
    llamado(c);
    const cosa = [met,mes]
    var coj = parser(cosa,periodo,indicador);
    
    setSemestre1(coj);
    
    return coj
  }

  return (
    <Container fluid >
    <Row>
    <Col sm={8}>
    
      <div className='container1'>
          {show ?(<div className='graph'> <Barchart labels={semestre1}/></div>
            ):(
              <div className='graph'> <Linechart labels={semestre1}/></div>

            )}
          <div className='containerButtoms'>
            <div className= 'dropdown1' >
              <Select value={val} defaultValue={otpT[0]} options={otpT} onChange={handleSelectChange}/>
            </div>
            <div className= 'dropdown1'> 
              <Select value={val2} defaultValue={otpI[0]} options={otpI} onChange={handleSelectChange2}/>
            </div>
            <div className= 'dropdown1'> 
              <Select value={val3} defaultValue={otpA[0]} options={otpA} onChange={handleSelectChange3}/>
            </div>
            <div className= 'dropdown1'> 
              <Select value={val1} defaultValue={otpP[0]} options={otpP} onChange={handleSelectChange1}/>
            </div>
            
            
            <div className= 'boton' > <Button color='success' onClick={()=>multT(val,val1,val2,val3)} > Graficar </Button> </div>
          </div>
        </div>
    </Col>
    <Col sm={4}>
      <div className='container2'>
          <div> 
            <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4>
            <GaugeChart
              id="gauge-chart1"
              nrOfLevels={3}
              percent={0.4}
              hideText={false}
              textColor="black"
              needleBaseColor="black"
              arcPadding={0.015}
              cornerRadius={0}
              arcWidth={0.19}
              needleColor="black"
              colors={["red", "yellow", "green"]}
              arcsLength={[0.075, 0.075, 0.025]}
            />
          </div>
        </div>
    </Col>
    </Row>
  </Container>
);
}

export default Visual;

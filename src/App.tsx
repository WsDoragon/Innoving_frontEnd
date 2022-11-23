import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Gerente from "./pages/Gestion_usuario/gerente";
import Analista from "./pages/Gestion_usuario/analista";
import Administrador from "./pages/Gestion_usuario/administrador";
import Proveedor from "./pages/Gestion_usuario/proveedor";
import Login from './pages/Gestion_usuario/loginInv';
import LoginFunc from './pages/Gestion_usuario/loginFunc';
import Page3 from "./pages/Gestion_usuario/page3";

import Header from './components/Gestion_usuario/Header';
import Componente from './components/Gestion_usuario/componente';
import Formulario from './components/Gestion_usuario/formuCreateInnoving';
import FormPROV from './components/Gestion_usuario/formuCreateProv';
import TablaPROV from './components/Gestion_usuario/tablaProv';
//import FormularioProv from './components/Gestion_usuario/formuCreateProveedor';
import FormularioEdit from './components/Gestion_usuario/formuEditInnoving';
import FormularioProvEdit from './components/Gestion_usuario/fromuEditProveedor';
import TestTabla from './components/Gestion_usuario/testTabla';
import HeaderDin from './components/Gestion_usuario/HeaderDin';
import { Home } from './pages/Analisis_indicadores/components/pages/Home';
import { ejes, indicadoresResumidos } from './pages/Analisis_indicadores/components/apifake';
import { AppRouter } from './pages/Analisis_indicadores/router/AppRouter';
import { Indicadores } from './pages/Analisis_indicadores/components/pages/Indicadores';

import Indicadores from './pages/Configuración_Proyecto/Indicadores';
import Metas from './pages/Configuración_Proyecto/metas';
import Peticiones from './pages/Configuración_Proyecto/Peticiones';
import Datos from './pages/Configuración_Proyecto/Datos';
import HistorialIndicadores from './components/Configuración_proyecto/historialPeticion/HistorialIndicadores';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<LoginFunc/>} />

        <Route path="/home" element={<Header/>}>
          <Route path="gerente" element={<Gerente/>}>
            <Route path='indicadores' element={<Componente />} />
            <Route path='solicitudes_indicadores' element={<Componente />} />
          </Route>
        
          <Route path="analista" element={<Analista/>}>
            <Route path='indicadores' element={<Componente />} />
            <Route path='metas' element={<Componente />} />
            <Route path='metricas' element={<Componente />} />
            <Route path='evidencias' element={<Componente />} />
            <Route path='proveedores' element={<Componente />} />

            <Route path='prueba' element={<Home ejes={ejes} indicadoresResumidos={indicadoresResumidos}/>}/>
            <Route path="prueba/indicador/:idIndicador" element={<Indicadores/>}></Route>
          </Route>

          <Route path="administrador" element={<Administrador/>} >
            <Route path='usuarios_innoving' element={<TestTabla/>} />
            <Route path='usuarios_proveedores' element={<TablaPROV />} />
            <Route path='usuarios_inn_des' element={<Componente/>} />
            <Route path='usuarios_prov_des' element={<Componente />} />
          </Route>

          <Route path="proveedor" element={<Proveedor/>} >
            <Route path='evidencias' element={<Componente />} />
          </Route>
        </Route>
        
        <Route path="/page3" element={<Page3/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/formularioProv" element={<FormPROV/>} />
        <Route path="/formularioEdit" element={<FormularioEdit/>} />
        <Route path="/editarUser/:id" element={<FormularioEdit/>} />
        <Route path="/editarProv/:id" element={<FormularioProvEdit/>} />
        
        </Routes>

        
       
       
        


    </Router>
  );
}

export default App;

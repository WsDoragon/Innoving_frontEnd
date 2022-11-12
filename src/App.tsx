import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Gerente from "./pages/gerente";
import Analista from "./pages/analista";
import Administrador from "./pages/administrador";
import Proveedor from "./pages/proveedor";
import Login from './pages/loginInv';
import LoginFunc from './pages/loginFunc';
import Page3 from "./pages/page3";

import Header from './components/Header';
import Componente from './components/componente';
import Formulario from './components/formuCreateInnoving';
import FormularioEdit from './components/formuEditInnoving';
import TestTabla from './components/testTabla';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<LoginFunc/>} />

        <Route path="/header" element={<Header/>}/>
        <Route path="/gerente" element={<Gerente/>}>
          <Route path='indicadores' element={<Componente />} />
          <Route path='solicitudes_indicadores' element={<Componente />} />
        </Route>
        
        <Route path="/analista" element={<Analista/>}>
          <Route path='indicadores' element={<Componente />} />
          <Route path='metas' element={<Componente />} />
          <Route path='metricas' element={<Componente />} />
          <Route path='evidencias' element={<Componente />} />
          <Route path='proveedores' element={<Componente />} />
        </Route>

        <Route path="/administrador" element={<Administrador/>} >
          <Route path='usuarios_innoving' element={<TestTabla/>} />
          <Route path='usuarios_proveedores' element={<Componente />} />
          <Route path='usuarios_inn_des' element={<Componente/>} />
          <Route path='usuarios_prov_des' element={<Componente />} />
        </Route>
        <Route path="/proveedor" element={<Proveedor/>} >
        <Route path='evidencias' element={<Componente />} />
        </Route>
        <Route path="/page3" element={<Page3/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/formularioEdit" element={<FormularioEdit/>} />
        <Route path="/editarUser/:id" element={<FormularioEdit/>} />
        </Routes>
    </Router>
  );
}

export default App;

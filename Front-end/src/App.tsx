import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Gerente from "./pages/gerente";
import Analista from "./pages/analista";
import Administrador from "./pages/administrador";
import Proveedor from "./pages/proveedor";

import Header from './components/Header';
import Login from './pages/loginInv';
import LoginFunc from './pages/loginFunc';

import Formulario from './components/formo';
import FormularioEdit from './components/formo2';
import Page3 from "./pages/page3";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<LoginFunc/>} />

        <Route path="/header" element={<Header/>}/>
        <Route path="/gerente" element={<Gerente/>}/>
        <Route path="/analista" element={<Analista/>}/>
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/proveedor" element={<Proveedor/>} />

        <Route path="/page3" element={<Page3/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/formularioEdit" element={<FormularioEdit/>} />
        <Route path="/editarUser/:id" element={<FormularioEdit/>} />

        </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Gerente from "./pages/gerente";
import Analista from "./pages/analista";
import Administrador from "./pages/administrador";
import Page3 from "./pages/page3";
import Formulario from "./pages/formo"
import Submenu from './pages/submenu';
import Submenu2 from './pages/submenu2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/gerente" element={<Gerente/>}/>
        <Route path="/analista" element={<Analista/>}/>
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/formo" element={<Formulario/>} />
        <Route path="/submenu" element={<Submenu/>}></Route>
        <Route path="/submenu2" element={<Submenu2/>} />
        </Routes>
    </Router>
  );
}

export default App;

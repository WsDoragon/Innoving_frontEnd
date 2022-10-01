import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
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
        <Route path="/gerente" element={<Page1/>}/>
        <Route path="/analista" element={<Page2/>}/>
        <Route path="/administrador" element={<Page3/>} />
        <Route path="/formo" element={<Formulario/>} />
        <Route path="/submenu" element={<Submenu/>}></Route>
        <Route path="/submenu2" element={<Submenu2/>} />
        </Routes>
    </Router>
  );
}

export default App;

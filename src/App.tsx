import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Formulario from "./pages/formo"

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
        </Routes>
    </Router>
  );
}

export default App;

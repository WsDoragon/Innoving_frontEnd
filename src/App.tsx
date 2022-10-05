import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Gerente from "./pages/gerente";
import Analista from "./pages/analista";
import Administrador from "./pages/administrador";
import Page3 from "./pages/page3";
import Header from './pages/test_pages/Header_test';
import Login from './pages/loginD';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/gerente" element={<Gerente/>}/>
        <Route path="/analista" element={<Analista/>}/>
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/loginD" element={<Login/>} />

        </Routes>
    </Router>
  );
}

export default App;

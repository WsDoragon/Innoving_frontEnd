import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Gerente from "./pages/gerente";
import Analista from "./pages/analista";
import Administrador from "./pages/administrador";
import Page3 from "./pages/page3";
import Header from './pages/test_pages/Header_test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/gerente" element={<Gerente/>}/>
        <Route path="/analista" element={<Analista/>}/>
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/page3" element={<Page3/>} />

        </Routes>
    </Router>
  );
}

export default App;

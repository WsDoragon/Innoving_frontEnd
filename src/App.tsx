import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Gerente from "./pages/Gestion_usuario/gerente";
import Analista from "./pages/Gestion_usuario/analista";
import Administrador from "./pages/Gestion_usuario/administrador";
import Proveedor from "./pages/Gestion_usuario/proveedor";
import Login from "./pages/Gestion_usuario/loginInv";
import LoginFunc from "./pages/Gestion_usuario/loginFunc";
import Page3 from "./pages/Gestion_usuario/page3";

import Header from "./components/Gestion_usuario/Header";
import Componente from "./components/Gestion_usuario/componente";
import Formulario from "./components/Gestion_usuario/formuCreateInnoving";
import FormPROV from "./components/Gestion_usuario/formuCreateProv";
import TablaPROV from "./components/Gestion_usuario/tablaProv";
import TablaDesactivadosInnoving from "./components/Gestion_usuario/tablaDesactivadosInnoving";
import TablaDesactivados from "./components/Gestion_usuario/tablaDesactivados2";

//import FormularioProv from './components/Gestion_usuario/formuCreateProveedor';
import FormularioEdit from "./components/Gestion_usuario/formuEditInnoving";
import FormularioProvEdit from "./components/Gestion_usuario/fromuEditProveedor";
import TestTabla from "./components/Gestion_usuario/testTabla";
import HeaderDin from "./components/Gestion_usuario/HeaderDin";
import { Home } from "./pages/Analisis_indicadores/components/pages/Home";
import {
  ejes,
  indicadoresResumidos,
} from "./pages/Analisis_indicadores/components/apifake";
import { AppRouter } from "./pages/Analisis_indicadores/router/AppRouter";
import { Indicadores } from "./pages/Analisis_indicadores/components/pages/Indicadores";

// gestion evidencias
import Files from "./components/gestion_evidencias/Files";
import Head from "./components/gestion_evidencias/Head";
import ListEvi from "./components/gestion_evidencias/ListEvi";
import Proyectos from "./components/gestion_evidencias/Proyectos";
import Publicaciones from "./components/gestion_evidencias/Publicaciones";
import RegProyect from "./components/gestion_evidencias/RegProyect";
import RegPubli from "./components/gestion_evidencias/RegPubli";
import UploadForm from "./components/gestion_evidencias/UploadForm";
import TestTablaProv from "./components/Gestion_usuario/testTablaProv";
import ForgotPassword from "./pages/Gestion_usuario/forgotPass";
import ResetPassword from "./pages/Gestion_usuario/resetPassword";


// visualizacion de resultados
import Visual from "./pages/visualizacion_resultados/Visual";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<LoginFunc />} />
        <Route path="/forgotPass" element={<ForgotPassword/>} />
        <Route path="/resetpass/:id/:tokenresetpassword" element={ <ResetPassword /> } />


        <Route path="/home" element={<Header />}>
          <Route path="gerente" element={<Gerente />}>
            <Route path="indicadores" element={<Componente />} />
            <Route path="solicitudes_indicadores" element={<Componente />} />
          </Route>

          <Route path="analista" element={<Analista />}>
            <Route path="indicadores" element={<Componente />} />
            <Route path="metas" element={<Componente />} />
            <Route path="metricas" element={<Componente />} />
            <Route path='evidencias' element={<Componente/>}/>
            
            <Route path="visualizacion" element={<Visual />} />

            <Route path="evidencias2" element={<Files />} />
            <Route path="publicaciones" element={<Publicaciones />} />
            
            <Route path="prueba/indicador/:idIndicador" element={<Indicadores />} >

          </Route>
          </Route>

          <Route path="administrador" element={<Administrador />}>
            <Route path="usuarios_innoving" element={<TestTabla />} />
            <Route path="usuarios_proveedores" element={<TestTablaProv />} />
          </Route>

          <Route path="proveedor" element={<Proveedor />}>
            <Route path="subirArchivos" element={<UploadForm />} />
            <Route path="subirPublicacion" element={<RegPubli />} />
          </Route>
        </Route>

        <Route path="/page3" element={<Page3 />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/formularioProv" element={<FormPROV />} />
        <Route path="/formularioEdit" element={<FormularioEdit />} />
        <Route path="/editarUser/:id" element={<FormularioEdit />} />
        <Route path="/editarProv/:id" element={<FormularioProvEdit />} />

      </Routes>
    </Router>
  );
}

export default App;


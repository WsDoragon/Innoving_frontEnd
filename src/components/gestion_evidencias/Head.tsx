import "./styles/Head.css";
// import logo from "../assets/images.png";

const Head = () => {
  return (
    <header className="Head">
      <div className="Head-logo">
        {/* <img className="Logo-Innoving" src={} alt="" /> */}
      </div>

      <h1 className="Innoving2030-h1">
        <a href="rutaEvi" className="Innoving2030-a">
          ModuloEvidencias
        </a>
      </h1>

      <nav className="Head-nav">
        <ul className="Head-ul">
          <li className="Head-li">
            <a href="rutaEvi" className="head-a">
              {" "}
              Evidencias
            </a>
          </li>

          <li className="Head-li">
            <a href="RutaUp" className="head-a">
              {" "}
              Subir archivos
            </a>
          </li>

          <li className="Head-li">
            <a href="rutaRegPubli" className="head-a">
              {" "}
              Registrar Publicacion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Head;

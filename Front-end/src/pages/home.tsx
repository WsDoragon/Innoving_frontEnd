import { Button, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

function Home(){
    const navigate = useNavigate();
    return (
      <div className="App">
        Home
        
        <Image
          width={320}
          height={180}  
          src="https://github.com/WsDoragon/Gestion_usuario_2.0/blob/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA.png?raw=true"
          alt="Default Image"
          objectFit="cover"
        />

        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/gerente")}} >Gerente</Button>
        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/analista")}} >Analista</Button>
        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/administrador")}} >Administrador</Button>
        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/formo")}} >formo</Button>
      </div>
    );
  }

  export default Home;
import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (
      <div className="App">
        Home
        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/page1")}} >Botón 1</Button>
        <Spacer y={0.5} />
        <Button onClick={() => {navigate("/page2")}} >Botón 2</Button>
      </div>
    );
  }

  export default Home;
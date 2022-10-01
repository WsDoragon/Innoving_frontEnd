import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Analista(){
    const navigate = useNavigate();
    return(
        <div>
            Analista
            <Button onClick={() => {navigate("/")}} >Home</Button>
        </div>
    );
}

export default Analista;
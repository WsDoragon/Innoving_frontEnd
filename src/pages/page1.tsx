import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Page1(){
    const navigate = useNavigate();
    return(
        <div>
            Página 1
            <Button onClick={() => {navigate("/")}} >Home</Button>
        </div>
    );
}

export default Page1;
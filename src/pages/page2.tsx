import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Page2(){
    const navigate = useNavigate();
    return(
        <div>
            Página 2
            <Button onClick={() => {navigate("/")}} >Home</Button>
        </div>
    );
}

export default Page2;
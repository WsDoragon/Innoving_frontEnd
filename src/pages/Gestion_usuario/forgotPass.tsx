import { Button, FormElement, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert2'
import { Row } from "reactstrap";



function ForgotPassword(){
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const userEmail = {
            email: e.target.email.value
        }

        await axios.post("http://localhost:3001/users/forgotPassword", userEmail)
            .then((res) => {
                swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Revise su email, se le ha enviado un link para restaurar su contraseña'
                })
                console.log(res)
                navigate("/admin")

            }).catch((err) => {
                swal.fire({
                    showConfirmButton:true,
                    icon: 'error',
                    text: "Error al intentar enviar los datos, compruebe el correo introducido."
                })
                console.log(err)
                            });
    }

    const [state, setState] = useState({
        email: ""
    });
  
      function handleChange(e: React.ChangeEvent<FormElement>) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        });
      }
    
    return(
        <div className="wrapper">
            <Spacer y={1}/>
            <h3>Cambiar contraseña</h3>
            <Spacer y={1}/>
            <Row>
            <Text> Se le enviará un link para restaurar su contraseña. Introduzca su correo electrónico.  </Text>
            </Row>
            
            <form className="mainContainer" onSubmit={handleSubmit}>
                    <div>Correo electrónico:</div>                                                       
                    <Input
                        size="xl"
                        width="200px"
                        css={{$$inputPlaceholderColor:"#747574"}}
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={handleChange} 
                        value={state.email}
                    />
                
                <Spacer y={1}/>
                <div className="divButton">
                    <Button type="submit">Enviar</Button>
                </div>
            </form>
            
        </div>
    );
}

export default ForgotPassword;
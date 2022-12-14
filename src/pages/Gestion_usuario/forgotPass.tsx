import { Grid } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert2'



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
                    text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña'
                })

                console.log(res)

            }).catch((err) => {
                swal.fire({
                    showConfirmButton:true,
                    icon: 'error',
                    text: "Error al intentar enviar los datos, compruebe el correo introducido o vuelva a intentarlo mas tarde."
                })
                console.log(err)
            });
    }
    
    return(
        <div className="main">
            <form className="mainContainer" onSubmit={handleSubmit}>
                <h3>Cambiar contraseña</h3>
                <div>Introduzca su correo electrónico:</div>
                <input type="string" name="email" placeholder="Email" required/>

                <div className="divButton">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
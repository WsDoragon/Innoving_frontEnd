import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import swal from 'sweetalert2'
import { Spacer } from '@nextui-org/react';


let regExPassword = /^(?=.*[A-Z])(?=.*[0123456789])[A-Za-z\d@$!%*?&#]{8,16}$/;

export default function ResetPassword(){
    let { id, tokenresetpassword } = useParams();

    const navigate = useNavigate()
    const [isError, setIsError] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const handleSubmit = async(e : React.FormEvent<HTMLDivElement> | any) =>{
        e.preventDefault()

        const userPassword = {
            password: e.target.password.value
        }

        if(!regExPassword.test(userPassword.password)) {
            swal.fire({
                showConfirmButton:true,
                icon: "error",
                text: "La contraseña debe contener almenos: 8 a 16 caracteres, 1 numero, 1 letra minuscula, 1 letra mayuscula y 1 caracter especial como #, @, %."
            });

            return
        }

        await axios.put("http://localhost:3001/users/resetPassword/" + id + "/" + tokenresetpassword, userPassword)
            .then((res) => {
                swal.fire({
                    showConfirmButton:true,
                    icon:"success",
                    text: "contraseña cambiada correctamente"
                })
                console.log(res)
                navigate("/admin")
            }).catch((err) => {
                swal.fire({
                    showConfirmButton:true,
                    icon:"error",
                    text:"Ha habido un error al intentar enviar los datos, vuelva a intentarlo mas tarde"
                })
                console.log(err)
            });
    }
    
    const checkValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPass = e.target.value
        setConfirmPassword(confirmPass)
        console.log(confirmPass)
        if(password !== confirmPass) {
            setIsError("La contraseña no coincide");
        } else {
            setIsError("")
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <div className="wrapper" onSubmit={handleSubmit}>
            <h3>Cambio de contraseña</h3>

            <form className='mainContainer'>
                <div className='divPassword'>Nueva contraseña:</div>
                
                <div className='containerPassword'>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Introduce tu contraseña' required/>
                    <button onClick={switchShowPassword}>{showPassword ? "ocultar" : "mostrar"}</button>
                </div>

                <Spacer y={1}/>
                <div>Confirmar contraseña:</div>

                <input type="password" value={confirmPassword} onChange={(e) => checkValidation(e)} name="confirmPassword" placeholder='Confirmar la contraseña' required/>
                <div className='confirmPassword'>{isError}</div>

                <Spacer y={1}/>   

                <div className='divButton'>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
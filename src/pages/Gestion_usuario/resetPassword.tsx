import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import swal from 'sweetalert2'
import { Button, FormElement, Input, Spacer } from '@nextui-org/react';


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

        await axios.put("http://170.187.160.109:3001/users/resetPassword/" + id + "/" + tokenresetpassword, userPassword)
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
    const [state, setState] = useState({
        confirmPass: "",
        password: "",
      });
  
      function handleChange(e: React.ChangeEvent<FormElement>) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        });
      }

    return(
        <div className="wrapper" onSubmit={handleSubmit}>
            <Spacer y={1}/>     
            <h3>Cambio de contraseña</h3>
            <Spacer y={1}/>   

            <form className='mainContainer'>
                <div className='divPassword'>Nueva contraseña:</div>

                <div className='containerPassword'>
                    <Input.Password
                        clearable
                        type="password"
                        size= "xl"
                        width="200px"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleChange} 
                        value={state.password}
                    />
                </div>

                <Spacer y={1}/>
                <div>Confirmar contraseña:</div>

                <Input.Password
                        clearable
                        type="password"
                        size= "xl"
                        width="200px"
                        placeholder="Contraseña"
                        name="confirmPass"
                        onChange={handleChange} 
                        value={state.confirmPass}
                    />
                <div className='confirmPassword'>{isError}</div>

                <Spacer y={1}/>   

                <div className='divButton'>
                    <Button type='submit'>Enviar</Button>
                </div>
            </form>
        </div>
    )
}
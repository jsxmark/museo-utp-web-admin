import '../../styles/register.css';
import '../../styles/normalize.css';
import { useState } from 'react';
import { Link } from "react-router-dom"
import { AuthenticateService } from "../../services/authenticate.service";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (firstName && lastName && email && password) {
                const response = await AuthenticateService.register(firstName, lastName, email, password);
                // Handle the successful registration response here, if needed
                console.log('User registered:', response);
            } else {
                setError('Por favor, ingresa todos los campos requeridos.');
            }
        } catch (error) {
            setError('Error en el registro de usuario: ' + error.message);
        }
    };


    return (
        <div className="reg-main-container">
            <div className="reg-left">
            <div className="reg-right-container-form-responsive reg-flex-form">
                    <h2 className='register-text reg-degradado-verde'>Registro de usuario</h2>
                    <p className='reg-welcome-text'>Regístrate para gestionar y compartir los increíbles artefactos que impulsaron la revolución digital.</p>
                    <input className='reg-input' type="text" name="" id="" placeholder='Nombre'/>
                    <input className='reg-input' type="text" name="" id="" placeholder='Apellido'/>
                    <input className='reg-input' type="email" name="" id="" placeholder='Correo electrónico'/>
                    <input className='reg-input' type="password" name="" id="" placeholder='Contraseña'/>
                    <p className='reg-signup-prompt'><Link to={"/login"} >¿Ya tienes una cuenta?</Link></p>
                    <button className='btn-register-responsive' type='submit'>Registrarse</button>
                </div>
            </div>
            <div className="reg-right">
                <div className="reg-right-container-form">
                    <h2 className='register-text reg-degradado-verde'>Registro de usuario</h2>
                    <p className='reg-welcome-text'>Regístrate para gestionar y compartir los increíbles artefactos que impulsaron la revolución digital.</p>
                    <input className='reg-input' type="text" name="" id="" placeholder='Nombre'/>
                    <input className='reg-input' type="text" name="" id="" placeholder='Apellido'/>
                    <input className='reg-input' type="email" name="" id="" placeholder='Correo electrónico'/>
                    <input className='reg-input' type="password" name="" id="" placeholder='Contraseña'/>
                    <p className='reg-signup-prompt'><Link to={"/login"} >¿Ya tienes una cuenta?</Link></p>
                    <button className='btn-register-reg' type='submit'>Registrarse</button>
                </div>
            </div>
        </div>
        );
}

export default Register

import '../../styles/login.css';
import '../../styles/normalize.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            axios.post('https://tu-api.com/login', { email, password })
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.error(error);
              setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
          });
        } else {
            setError('Por favor, ingresa tu usuario y contraseña.');
        }
    };

    return (
        <div className="main-container">
            <div className="left"></div>
            <div className="right">
                <div className="right-container-form">
                    <form onSubmit={handleSubmit}>
                        {error && <div>{error}</div>}
                        <h2 className='login-text degradado-verde'>Inicio de Sesión</h2>
                        <p className='welcome-text'>¡Bienvenido de nuevo! Inicia sesión para acceder a tu cuenta</p>
                        <input type="email" id="email" placeholder='Correo electrónico' value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <input type="password" id="password" placeholder='Contraseña' value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <p className='signup-prompt'><Link to={"/register"} >¿Aún no tienes una cuenta?</Link></p>
                        <button className='btn-login' type='submit'>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
        )
}

export default Login

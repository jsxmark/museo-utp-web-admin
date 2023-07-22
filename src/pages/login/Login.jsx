import '../../styles/login.css';
import '../../styles/normalize.css';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom"
import { AuthenticateService } from "../../services/authenticate.service";
import { useAuth } from '../../components/auth/AuthProvider';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const goTo = useNavigate();
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard"/>
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (username && password) {
            AuthenticateService.login(username, password)
            .then(result => {
                if (result.usuario.rol === "ESTUD") {
                    if (result.token) {
                        auth.allowSession(result.token)
                        goTo("/dashboard")
                        window.location.reload()
                    }   
                } else {
                    alert("No tienes permiso para acceder a este sitio.")
                }
            })
            .catch(() => {
                setError('Error en la solicitud de inicio de sesión. Por favor, inténtalo nuevamente.')
            }).finally(() => {
                setTimeout(() => {
                    setError('')
                }, 3000);
            });
        } else {
            setError('Por favor, ingresa tu usuario y contraseña.')
        }
    }

    return (
        <div className="main-container">
            <div className="left">
            <div className="right-container-form-responsive flex-form">
                    {error && <div className= 'error-title'>{error}</div>}
                    <form className='login-form'onSubmit={handleSubmit}>
                        <h2 className='login-text degradado-verde'>Inicio de Sesión</h2>
                        <p className='welcome-text'>¡Bienvenido de nuevo! Inicia sesión para acceder a tu cuenta</p>
                        <input className='log-input' type="text" placeholder='Nombre de usuario' value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <input className='log-input' type="password" placeholder='Contraseña' value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <p className='signup-prompt'><Link to={"/login"}>¿Olvidó su contraseña?, pulse aquí</Link></p>
                        <button className='btn-login' type='submit'>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="right-container-form">
                    {error && <div className= 'error-title'>{error}</div>}
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h2 className='login-text degradado-verde'>Inicio de Sesión</h2>
                        <p className='welcome-text'>¡Bienvenido de nuevo! Inicia sesión para acceder a tu cuenta</p>
                        <input className='log-input' type="text" placeholder='nombre de usuario' value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <input className='log-input' type="password" placeholder='Contraseña' value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <p className='signup-prompt'><Link to={"/login"}>¿Olvidó su contraseña?, pulse aquí</Link></p>
                        <button className='btn-login' type='submit'>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
        )
}

export default Login

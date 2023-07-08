import '../../styles/register.css';
import '../../styles/normalize.css';
import { Link } from "react-router-dom"

function Register() {
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

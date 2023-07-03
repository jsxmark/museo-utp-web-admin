import '../../styles/login.css';
import '../../styles/normalize.css';

function Login() {
    return (
        <div className="main-container">
            <div className="left"></div>
            <div className="right">
                <div className="right-container-form">
                    <h2 className='login-text degradado-verde'>Inicio de Sesión</h2>
                    <p className='welcome-text'>¡Bienvenido de nuevo! Inicia sesión para acceder a tu cuenta</p>
                    <input type="email" name="" id="" placeholder='Correo electrónico'/>
                    <input type="password" name="" id="" placeholder='Contraseña'/>
                    <p className='signup-prompt'>¿Aún no tienes una cuenta?</p>
                    <button className='btn-login' type='submit'>Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Login

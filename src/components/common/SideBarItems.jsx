import '../../styles/login.css';
import titi from '../../assets/images/titi.png'
import { Link } from "react-router-dom"
import { useAuth } from '../../components/auth/AuthProvider';

function SideBarItems() {

    const auth = useAuth();

    const removeToken = (event) => {
        event.preventDefault()
        auth.endSession()
    }

    return (
        <>
            <ul>
                <li><a href="#" className="logo">
                    <img src= {titi} alt="" />
                </a></li>
                <li className='op'>
                    <Link to={"/dashboard"} >
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Inicio</span>
                    </Link>
                </li>
                <li className='op'>
                    <Link to={"/register"} >
                        <i className="fas fa-user"></i>
                        <span className="nav-item">Reg. Usuario Admin</span>
                    </Link>
                </li>
                <li className='op'><a href="">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span className="nav-item">Reg. Estudiante</span>
                </a></li> 
                <li className='op'>
                    <Link to={"/articles"} >
                        <i className="fa-solid fa-plus"></i>
                        <span className="nav-item">Añadir Artículo</span>
                    </Link>
                </li>
                <li className='op'>
                    <Link to={"/categories"} >
                        <i className="fa-solid fa-window-restore"></i>
                        <span className="nav-item">Añadir Categoría</span>
                    </Link>
                </li>   

                <li className='op'><a href="">
                    <i class="fa-solid fa-building-columns"></i>
                    <span className="nav-item">Añadir Facultad</span>
                </a></li> 

                <li className='op'><a href="">
                    <i class="fa-solid fa-receipt"></i>
                    <span className="nav-item">Añadir Carrera</span>
                </a></li>

                <li className='op' onClick={removeToken}>
                    <Link to={"/login"}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="nav-item">Salir</span>
                    </Link>
                </li>
            </ul>
        </>

        );
}

export default SideBarItems

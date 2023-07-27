import '../../styles/login.css';
import titi from '../../assets/images/titi.png'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../components/auth/AuthProvider';

function SideBarItems() {

    const auth = useAuth();

    const removeToken = (event) => {
        event.preventDefault()
        auth.endSession()
    }

    const location = useLocation();

    return (
        <>
            <ul>
                <li className="logo">
                    <Link to={"/dashboard"} >
                        <img src= {titi} alt="pet" />
                    </Link>
                </li>

                <li className={`op ${location.pathname === "/dashboard" ? "active" : ""}`}>
                    <Link to={"/dashboard"} >
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Inicio</span>
                    </Link>
                </li>

                <li className={`op ${location.pathname === "/register" ? "active" : ""}`}>
                    <Link to={"/register"} >
                        <i className="fas fa-user"></i>
                        <span className="nav-item">Reg. Admin</span>
                    </Link>
                </li>

                <li className={`op ${location.pathname === "/users" ? "active" : ""}`}>
                    <Link to={"/users"} >
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span className="nav-item">Adm. Usuarios</span>
                    </Link>
                </li>
                
                <li className={`op ${location.pathname === "/articles" ? "active" : ""}`}>
                    <Link to={"/articles"} >
                        <i className="fa-solid fa-plus"></i>
                        <span className="nav-item">Añadir Artículo</span>
                    </Link>
                </li>

                <li className={`op ${location.pathname === "/categories" ? "active" : ""}`}>
                    <Link to={"/categories"} >
                        <i className="fa-solid fa-window-restore"></i>
                        <span className="nav-item">Añadir Categoría</span>
                    </Link>
                </li>   

                <li className={`op ${location.pathname === "/faculties" ? "active" : ""}`}>                
                    <Link to={"/faculties"} >
                        <i className="fa-solid fa-building-columns"></i>
                        <span className="nav-item">Añadir Facultad</span>
                    </Link>
                </li> 

                <li className={`op ${location.pathname === "/careers" ? "active" : ""}`}>
                    <Link to={"/careers"} >
                        <i className="fa-solid fa-receipt"></i>
                        <span className="nav-item">Añadir Carrera</span>
                    </Link>
                </li>

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

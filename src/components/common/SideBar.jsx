import '../../styles/articles.css';
import '../../styles/dashboard.css'
import hamburguesa from '../../utils/quarter-pound'
import titi from '../../assets/images/titi.png'
import { Link } from "react-router-dom"
import { useEffect } from 'react';

function SideBar() {

    useEffect(() => {
        hamburguesa();
      }, []);

  return (
      <>
        <nav className='nav-sidebar'>
                <ul>
                    <li><a href="#" className="logo">
                        <img src= {titi} alt="" />
                    </a></li>
                    <li className='op'><a href="#">
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Inicio</span>
                    </a></li>
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
                    <li className='op'><a href="">
                        <i className="fa-solid fa-window-restore"></i>
                        <span className="nav-item">Añadir Categoría</span>
                    </a></li>   

                    <li className='op'><a href="">
                        <i class="fa-solid fa-building-columns"></i>
                        <span className="nav-item">Añadir Facultad</span>
                    </a></li> 
                    <li className='op'><a href="">
                        <i class="fa-solid fa-receipt"></i>
                        <span className="nav-item">Añadir Carrera</span>
                    </a></li> 
                    <li className='op'><a href="" className="logout">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="nav-item">Salir</span>
                    </a></li>
                </ul>
        </nav>
    
        <section className="main-articles">
            <div className="quarter-pound-container">
                <div className="bars__menu">
                    <span className="line1__bars-menu"></span>
                    <span className="line2__bars-menu"></span>
                    <span className="line3__bars-menu"></span>
                </div>
            </div>
              
            <nav className='nav-sidebar-responsive'>
            <ul>
                <li className='op'><a href="#">
                    <i className="fas fa-home"></i>
                    <span className="nav-item">Inicio</span>
                </a></li>
                <li className='op'>
                    <Link to={"/register"}>
                    <i className="fas fa-user"></i>
                    <span className="nav-item">Reg. Usuario Admin</span>
                    </Link>
                </li>
                <li className='op'><a href="">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span className="nav-item">Reg. Estudiante</span>
                </a></li> 
                <li className='op'>
                    <Link to={"/articles"}>
                    <i className="fa-solid fa-plus"></i>
                    <span className="nav-item">Añadir Artículo</span>
                    </Link>
                </li>
                <li className='op'><a href="">
                    <i className="fa-solid fa-window-restore"></i>
                    <span className="nav-item">Añadir Categoría</span>
                </a></li>   
                <li className='op'><a href="">
                    <i class="fa-solid fa-building-columns"></i>
                    <span className="nav-item">Añadir Facultad</span>
                </a></li> 
                <li className='op'><a href="">
                    <i class="fa-solid fa-receipt"></i>
                    <span className="nav-item">Añadir Carrera</span>
                </a></li> 
                <li className='op'><a href="">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="nav-item">Salir</span>
                </a></li>
            </ul>
            </nav>
        </section>
      </>
  )
}

export default SideBar;
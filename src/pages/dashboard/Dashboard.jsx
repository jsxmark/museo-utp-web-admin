import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import titi from '../../assets/images/titi.png'
import compu from '../../assets/images/compu_prehistorica.jpg'
import { useEffect } from 'react';
import hamburguesa from '../../utils/quarter-pound.js'
import { Link } from "react-router-dom"

function Dashboard(){

    useEffect(() => {
        hamburguesa();
      }, []);
    
    return(
        <div className="container">
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
            
            <section className="main">

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
    
                <div className="main-top">
                    <h1 className='admins'>Administradores</h1>
                </div>
                <div className="main-skills">
                    <div className="card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Web developemt</h3>
                        <p>Join Over 1 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="card">
                        <i className="fab fa-wordpress"></i>
                        <h3>WordPress</h3>
                        <p>Join Over 3 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="card">
                        <i className="fas fa-palette"></i>
                        <h3>graphic design</h3>
                        <p>Join Over 2 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="card">
                        <i className="fab fa-app-store-ios"></i>
                        <h3>IOS dev</h3>
                        <p>Join Over 1 million Students.</p>
                        <button>Get Started</button>
                    </div>
                </div>

                <section className="main-course">
                    <h1>Artítulos de Museo</h1>
                    <div className="course-box">

                        <div className="course">
                            <div className="box">
                                <h3>Computadora Prehistórica</h3>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Eliminar</button>
                                <img src={compu} alt="" />
                            </div>
                            <div className="box">
                                <h3>Computadora Prehistórica</h3>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Eliminar</button>
                                <img src={compu} alt="" />
                            </div>
                            <div className="box">
                                <h3>Computadora Prehistórica</h3>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Eliminar</button>
                                <img src={compu} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            
        </div>
         
        ); 
}
export default Dashboard


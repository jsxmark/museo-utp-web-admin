import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import { Link, useNavigate } from "react-router-dom"

function Dashboard(){
    return(
        <div className="container">
            <nav className='nav-sidebar'>
                <ul>
                    <li><a href="#" class="logo">
                        <img src="https://cdn.discordapp.com/attachments/1121914239880273930/1124004394711658516/fotor-ai-20230629105039.jpg" alt="" />
                    </a></li>
                    <li className='op'><a href="#">
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Inicio</span>
                    </a></li>
                    <li className='op'><a href="#">
                        <i className="fas fa-user"></i>
                        <span className="nav-item">Perfil</span>
                    </a></li>
                    <li className='op'>
                        <Link to={"/articles"} >
                            <i className="fa-solid fa-plus"></i>
                            <span className="nav-item">Añadir Artículo</span>
                        </Link>
                    </li>
                    <li className='op'><a href="">
                    <i class="fa-solid fa-window-restore"></i>
                        <span className="nav-item">Añadir Categoría</span>
                    </a></li>
                    <li className='op'><a href="">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span className="nav-item">Añadir Estudiante</span>
                    </a></li>

                    <li className='op'><a href="" class="logout">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="nav-item">Salir</span>
                    </a></li>
                </ul>
            </nav>
            
            <section className="main">
                <div className="main-top">
                    <h1>Skills</h1>
                    <i className="fas fa-user-cog"></i>
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
                                <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/14061799/image/8fc8f984869935deff0264857dedaf07" alt="" />
                            </div>
                            <div className="box">
                                <h3>Computadora Prehistórica</h3>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Eliminar</button>
                                <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/14061799/image/8fc8f984869935deff0264857dedaf07" alt="" />
                            </div>
                            <div className="box">
                                <h3>Computadora Prehistórica</h3>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Eliminar</button>
                                <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/14061799/image/8fc8f984869935deff0264857dedaf07" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
        ); 
}
export default Dashboard
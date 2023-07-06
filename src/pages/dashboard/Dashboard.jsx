import '../../styles/dashboard.css'
import '../../styles/normalize.css'

function Dashboard(){
    return(
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#" class="logo">
                        <span className="nav-item">DashBoard</span>
                    </a></li>
                    <li><a href="#">
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Inicio</span>
                    </a></li>
                    <li><a href="#">
                        <i className="fas fa-user"></i>
                        <span className="nav-item">Perfil</span>
                    </a></li>
                    <li><a href="">
                        <i className="fa-solid fa-plus"></i>
                        <span className="nav-item">Añadir Artículo</span>
                    </a></li>
                    <li><a href="">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span className="nav-item">Añadir Estudiante</span>
                    </a></li>
                    <li><a href="" class="logout">
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
                                <h3>HTML</h3>
                                <p>80% - progress</p>
                                <button>continue</button>
                                <i className="fab fa-html5 html"></i>
                            </div>
                            <div className="box">
                                <h3>CSS</h3>
                                <p>50% - progress</p>
                                <button>continue</button>
                                <i className="fab fa-css3-alt css"></i>
                            </div>
                            <div className="box">
                                <h3>JavaScript</h3>
                                <p>30% - progress</p>
                                <button>continue</button>
                                <i className="fab fa-js-square js"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
        ); 
}
export default Dashboard
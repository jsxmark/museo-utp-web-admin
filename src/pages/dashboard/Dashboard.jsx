import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import compu from '../../assets/images/compu_prehistorica.jpg'
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';

function Dashboard() {

    return (
        <div className="container">
            <SideBar />

            <section className="main">

                <SideBarResponsive />
    
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
                                <img src={compu} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Dashboard


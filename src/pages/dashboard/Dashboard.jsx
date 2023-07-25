import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import React, { useState, useEffect } from 'react';
import compu from '../../assets/images/compu_prehistorica.jpg'
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';

function Dashboard(){

    const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Llamada a la función getArticles para obtener los datos de los artículos
    ArticlesService.getArticles()
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []);
    
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
            <h3>Web development</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
          </div>
        </div>
        <section className="main-course">
          <h1>Artículos de Museo</h1>
          <div className="course-box">
            <div className="course">
              {/* Mapeo de los artículos obtenidos y mostrar sus nombres */}
              {articles.map((article) => (
                <div key={article.id} className="box">
                  <h3>{article.nombre}</h3>
                  {/* Aquí puedes agregar cualquier otra información de los artículos que desees mostrar */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Dashboard


import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import React, { useState, useEffect } from 'react';
import compu from '../../assets/images/compu_prehistorica.jpg'
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';
import { FacultiesService } from '../../services/faculties.service';
import { CareersService } from '../../services/careers.service';

function Dashboard(){
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [careers, setCareers] = useState([]);
  
    function reloadServices() {
          ArticlesService.getArticles().then((data) => setArticles(data));
          CategoriesService.getCategories().then((data) => setCategories(data));
          FacultiesService.getFaculties().then((data) => setFaculties(data));
          CareersService.getCareers().then((data) => setCareers(data))
    }
  
    useEffect(() => {
      reloadServices();
    }, []);
    
     return (
    <div className="container">
      <SideBar />
      <section className="main">
        <SideBarResponsive />
  
        <section className="main-course">
          <h1>Artículos de Museo Prueba</h1>
          <div className="course-box">
            <div className="course">
              {articles.map((article) => (
                <div key={article.id} className="box">
                  <h3>{article.nombre}</h3>
                  <p>{article.categoria}</p>
                  <img src={article.fotos[0].url} alt="fotito" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="main-course">
          <h1>Categorías</h1>
          <div className="course-box">
            <div className="course">
            {categories.map((category) => (
              <div key={category.id} className="box">
              <h3>{category.nombre}</h3>
        </div>
               ))}
            </div>
          </div>
        </section>

        <section className="main-course">
          <h1>Facultades</h1>
          <div className="course-box">
            <div className="course">
            {faculties.map((faculty) => (
        <div key={faculty.id} className="box">
          <h3>{faculty.nombre}</h3>
        </div>
      ))}
            </div>
          </div>
        </section>

        <section className="main-course">
          <h1>Carreras</h1>
          <div className="course-box">
            <div className="course">
              {careers.map((career) => (
                <div key={career.id} className="box">
                  <h3>{career.nombre}</h3>
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


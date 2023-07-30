import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import React, { useState, useEffect } from 'react';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';
import { FacultiesService } from '../../services/faculties.service';
import { CareersService } from '../../services/careers.service';


function Dashboard(){
    const [categories, setCategories] = useState([]);
    const [filtercategory, setFilterCategory] = useState('Almacenamiento');
    const [filterFaculty, setFilterFaculty] = useState('');
    const [articles, setArticles] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [careers, setCareers] = useState([]);
  
    function reloadServices() {
      ArticlesService.getArticles().then((data) => setArticles(data));
      CategoriesService.getCategories().then((data) => setCategories(data));
      FacultiesService.getFaculties().then((data) => setFaculties(data));
      CareersService.getCareers().then((data) => setCareers(data));
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
          <h1>Artículos del Museo</h1>
             <div className="course-box">
                <p className="seleccione-filter">Seleccione: </p>
                <select
                    className="select-articles"
                    placeholder="Elija la facultad..."
                    value={filtercategory}
                    onChange={(event) => setFilterCategory(event.target.value)}>
                    {categories.map((mcategory) => (
                        <option
                            value={mcategory.nombre}
                            key={mcategory.id}
                            >
                            Categoria: {mcategory.nombre}
                        </option>
                    ))}
                </select>
                <div className="course">
                  {articles.filter((article) => article.categoria === filtercategory).length === 0 ? (
                    <h1>No hay artículos registrados</h1>
                  ) : (
                    articles
                      .filter((article) => article.categoria === filtercategory)
                      .map((article) => (
                        <div key={article.id} className="box box1">
                          <h3 className='box-text-bold name'>{article.nombre}</h3><br></br>
                          <p className="box-text-bold data">Datos del Articulo</p><br></br>
                          <p className='category-sub'><p className="box-text-bold">Categoria: </p>{article.categoria}</p>
                          <p className='location'><p className="box-text-bold">Localización: </p>{article.ubicacion}</p>
                          <p className='owner'><p className="box-text-bold">Dueño: </p>{article.dueno}</p>
                        </div>
                      ))
                  )}
                </div>
             </div>
        </section>

        <section className="main-course">
          <h1>Categorías</h1>
          <div className="course-box">
            <div className="course">
              {categories.map((category) => (
              <div key={category.id} className="box box2">
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
        <div key={faculty.id} className="box box3">
          <h3>{faculty.nombre}</h3>
        </div>
      ))}
            </div>
          </div>
        </section>
        
    <section className="main-course">
      <h1>Facultades</h1>
      <div className="course-box">
        
        <select
          className="select-articles"
          value={filterFaculty}
          onChange={(event) => setFilterFaculty(event.target.value)}
        >
          <option value="">Todas las facultades</option>
          {faculties.map((faculty) => (
            <option value={faculty.nombre} key={faculty.id}>
              {faculty.nombre}
            </option>
          ))}
        </select>

    
    <div className="course">
      {careers
        .filter((career) =>
          !filterFaculty || career.facultad === filterFaculty
        )
        .map((career) => (
          <div key={career.id} className="box box4">
            <h3>{career.nombre}</h3>
            <p className="name">
              <span className="box-text-bold">Facultad: </span>
              {career.facultad}
            </p>
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


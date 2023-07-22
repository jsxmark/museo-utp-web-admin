import React, { useState, useEffect } from 'react';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';

function Articles() {

    const [articles, setArticles] = useState([]);
    const [namearticle, setNameArticle] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [dueno, setDueno] = useState('');
    const [description, setDescription] = useState('');
    const mappingArticles = ArticlesService.getArticles().then((data) => setArticles(data));
    
    useEffect(() => {
        mappingArticles
    }, []);

    const handleFromSubmit = (event) => {
        
    };

  return (
    <div className='container'>
        <SideBar />
        <section className='main-articles'>
            <SideBarResponsive />
                <main className="table">
                    <section className="table_header">
                        <h1>Lista de Articulos</h1>
                    </section>
                  <section className="table_body">
                        <section className="table_header">
                            <h1>Articulos</h1>
                        </section>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ubicacion</th>
                                    <th>Categoria</th>
                                    <th>Dueño</th>
                                    <th>Descripcion</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id}>
                                    <td>{article.nombre}</td>
                                    <td>{article.ubicacion}</td>
                                    <td>{article.categoria}</td>
                                    <td>{article.dueno}</td>
                                    <td>{article.descripcion}</td>
                                    <td>
                                        <button className="article-button-delete" onClick={() => handleDelete(category.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                    
                    <section className="table_header">
                        <h2>Agregar Objeto</h2>
                  </section>
                  <section className="table_body">
                      <form onSubmit={handleFromSubmit}>
                        <input
                            className="article-input"
                            type="text" 
                            name="nombre"
                            required
                            placeholder="Ingrese Nombre..."
                            value={namearticle}
                            onChange={(event) => setNameArticle(event.target.value)}
                        />
                        <input
                            className="article-input"
                            type="text" 
                            name="ubicacion"
                            required
                            placeholder="Se encuentra en..."
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                        />
                        <input
                            className="article-input"
                            type="text" 
                            name="categoria"
                            required
                            placeholder="Ingrese Categoria..."
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <input
                            className="article-input"
                            type="text" 
                            name="dueno"
                            required
                            placeholder="Pertenece a...?"
                            value={dueno}
                            onChange={(event) => setDueno(event.target.value)}
                        />
                        <input
                            className="article-input"
                            type="text" 
                            name="descripcion"
                            required
                            placeholder="Descripcion..."
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <button className="article-button" type="submit">Agregar</button>
                      </form>
                  </section>
              </main>
        </section>
    </div>
    );
}

export default Articles;
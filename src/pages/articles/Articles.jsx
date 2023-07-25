import React, { useState, useEffect } from 'react';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';

function Articles() {

    const [articles, setArticles] = useState([]);
    const [namearticle, setNameArticle] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [duenostate, setDueno] = useState('');
    const [yearstate, setYear] = useState('');
    const [description, setDescription] = useState('');
    function reloadTable() {
        ArticlesService.getArticles().then((data) => setArticles(data));
        ArticlesService.getArticles().then((data) => console.log(data))
    }

    useEffect(() => {
        reloadTable()
    }, []);

    const handleFromSubmit = (event) => {
        event.preventDefault();
        let formdata = new FormData();

        formdata.append('data', JSON.stringify({
            nombre: namearticle,
            descripcion: description,
            categoria_id: category,
            ubicacion: location,
            dueno: duenostate,
            year: yearstate
        }));

        ArticlesService.postArticle(formdata)
        .then(() => {
            reloadTable()
            setNameArticle('')
            setDescription('')
            setLocation('')
            setCategory('')
            setDueno('')
            setYear('')
        })
        .catch(() => {
            alert('Error en la solicitud de insercion del articulo. Por favor, inténtalo nuevamente.')
        });
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
                    <section className="table_sub-header">
                        <h2>Articulos</h2>
                    </section>
                  <section className="table_body">
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
                    <section className="table_sub-header">
                        <h2>Agregar Objeto</h2>
                  </section>
                  <section className="table_form">
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
                            type="number" 
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
                            value={duenostate}
                            onChange={(event) => setDueno(event.target.value)}
                          />
                        <input
                            className="article-input"
                            type="number" 
                            name="year"
                            required
                            placeholder="Del año...?"
                            value={yearstate}
                            onChange={(event) => setYear(event.target.value)}
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
                        <input
                            className="article-input"
                            id='my-files'
                            type="file"
                            name="multi"
                            accept="image/*"
                            multiple
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
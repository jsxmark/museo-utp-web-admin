import React, { useState, useEffect } from 'react';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import ImageNotFound from '../../assets/images/not-found-logo.png'
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from '../../utils/constants';

function Articles() {

    const [articles, setArticles] = useState([]);
    const [namearticle, setNameArticle] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [duenostate, setDueno] = useState('');
    const [yearstate, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [mapcategory, setMapCategory] = useState([]);

    function reloadServices() {
        ArticlesService.getArticles().then((data) => setArticles(data));
        CategoriesService.getCategories().then((data) => setMapCategory(data));
    }

    useEffect(() => {
        reloadServices()
    }, []);

    const handleQuillChange = (value) => {
        setDescription(value);
        document.getElementById('descripcionInput').value = value;
    };

    const handleFromSubmit = (event) => {
        event.preventDefault();
        ArticlesService.postArticle(new FormData(event.currentTarget))
        .then(() => {
            reloadServices()
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

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este articulo?");
        if (confirmDelete) {
            ArticlesService.deleteArticle(id)
            .then(() => {
                reloadServices()
                setNameArticle('')
                setDescription('')
                setLocation('')
                setCategory('')
                setDueno('')
                setYear('')
            })
            .catch(() => {
                alert('Error en la solicitud de borrado del articulo. Por favor, inténtalo nuevamente.')
            });
        }  
    }

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
                                    <td>
                                        <div id='justi' dangerouslySetInnerHTML={{ __html: article.descripcion }} />
                                    </td>
                                    <td>
                                        <button className="article-button-delete" onClick={() => handleDelete(article.id)}>Eliminar</button>
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
                        <select
                            className="select-articles"
                            name="categoria_id"
                            required
                            placeholder="Ingrese Categoria..."
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}>
                            {mapcategory.map((mcategory) => (
                                <option
                                    value={mcategory.id}
                                    key={mcategory.id}
                                    >
                                    Categoria: {mcategory.nombre}
                                </option>
                            ))}
                        </select>
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
                        <section className="quill-title">
                            <h2>Descripción</h2>
                        </section>
                        <div className="editor-quill" name="descripcion">
                              <ReactQuill
                                  className="react-quill"
                                  theme="snow"
                                  value={description}
                                  onChange={handleQuillChange}
                                  modules={{
                                    toolbar: toolbarOptions,
                                }}
                              />;
                        </div>
                        <input
                            type="hidden"
                            id="descripcionInput"
                            name="descripcion"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            className="article-input"
                            id='my-files'
                            type="file"
                            name="multimedios"
                            accept=".jpg, .jpeg, .png, .gif, .mp4, .mp3, audio/*, video/*"
                            multiple
                            required
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
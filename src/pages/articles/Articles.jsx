import '../../styles/articles.css';
import '../../styles/dashboard.css'
import data from "../../utils/data.json"
import '../../styles/normalize.css';
import {nanoid} from "nanoid"
// import { useState} from "react"
import LeerLinea from '../../components/common/LeerLinea';
import EditarLinea from '../../components/common/EditarLinea';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import React, { useState, useEffect } from 'react';
import { ArticlesService } from '../../services/articles.service';

function Articles() {

    const [articles, setArticles] = useState([]);

  useEffect(() => {
    ArticlesService.getArticles()
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

    const [articulos, setArticulos] = useState(data);
    const [addFormData, setAddFormData] = useState({
        nombre: "",
        ubicacion: "",
        categoria: "",
        descripcion: "",
        dueno: "",
    });

    const [editarData, setEditarData] = useState({
        nombre: "",
        ubicacion: "",
        categoria: "",
        descripcion: "",
        dueno: "",
    })
    const [editarArticuloId, setEditarArticuloId] = useState(null);

    //Función para manejar los cambios en el formulario al editar un articulo
    const handleEditarFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newData = {...editarData}
        newData[fieldName] = fieldValue;

        setEditarData(newData);
    }


    const handleClicEditar = (event, articulo) => {
        event.preventDefault();
        setEditarArticuloId(articulo.idTemporal);

        const formValues = {
            nombre: articulo.nombre,
            ubicacion: articulo.ubicacion,
            categoria: articulo.categoria,
            dueno: articulo.dueno,
            descripcion: articulo.descripcion
        }

        setEditarData(formValues);
    }

    const handleEditarSubmit = (event) => {
        event.preventDefault();

        const articuloEditado = {
            id: editarArticuloId,
            nombre: editarData.nombre,
            ubicacion: editarData.ubicacion,
            categoria: editarData.categoria,
            dueno: editarData.dueno,
            descripcion: editarData.descripcion
        }

        const newArticulos = [...articulos];

        const index = articulos.findIndex((articulo) => articulo.idTemporal === editarArticuloId);

        newArticulos[index] = articuloEditado;

        setArticulos(newArticulos);
        setEditarArticuloId(null)
    };


    
    const handleCancelar = () => {
        setEditarArticuloId(null);
    }

    const handleEliminar = () => {
        const newArticulo = [...articulos];

        const index = articulos.findIndex((articulo) => articulo.idTemporal === editarArticuloId);

        newArticulo.splice(index, 1);

        setArticulos(newArticulo);
    }

    const handleFormChange = (event) => {
        event.preventDefault();

        const nombre = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[nombre] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleFromSubmit = (event) => {
        event.preventDefault();

        const newArticulo = {
            id: nanoid(),
            nombre: addFormData.nombre,
            ubicacion: addFormData.ubicacion,
            categoria: addFormData.categoria,
            descripcion: addFormData.descripcion,
            dueno: addFormData.dueno,
        };

        const newArticulos = [...articulos, newArticulo];
        setArticulos(newArticulos);
    };

    return (
        <div className='container'>
            <SideBar/>
    
            <section className="main-articles">
                
                <SideBarResponsive/>
                
                <main class="table">
                    <section class="table_header">
                        <h1>Lista de Articulos</h1>
                    </section>
                    <section class="table_body">
                        <form onSubmit={handleEditarSubmit}>
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

                                {articles.map((articulo) => (
                                    <>
                                    {editarArticuloId === articulo.idTemporal ? (
                                        <EditarLinea
                                        editarData={editarData}
                                        handleEditarFormChange={handleEditarFormChange}
                                        handleCancelar={handleCancelar}
                                        />
                                    ) : (
                                        <LeerLinea
                                        articulo={articulo}
                                        handleClicEditar={handleClicEditar}
                                        handleEliminar={handleEliminar}
                                        />
                                    )}
                                    </>
                                ))}
                                </tbody>
                            </table>
                        </form>
                    </section>

                    <section class="table_header">
                        <h2>Agregar Objeto</h2>
                    </section>

                    <section class="table_body">
                            <form onSubmit={handleFromSubmit}>
                                <input
                                    className="article-input"
                                    type="text" 
                                    name="nombre"
                                    required
                                    placeholder="Ingrese Nombre..."
                                    onChange={handleFormChange}
                                />
                                <input
                                    className="article-input"
                                    type="text" 
                                    name="ubicacion"
                                    required
                                    placeholder="Se encuentra en..."
                                    onChange={handleFormChange}
                                />
                                <input
                                    className="article-input"
                                    type="text" 
                                    name="categoria"
                                    required
                                    placeholder="Ingrese Categoria..."
                                    onChange={handleFormChange}
                                />
                                <input
                                    className="article-input"
                                    type="text" 
                                    name="dueno"
                                    required
                                    placeholder="Pertenece a...?"
                                    onChange={handleFormChange}
                                />
                                <input
                                    className="article-input"
                                    type="text" 
                                    name="descripcion"
                                    required
                                    placeholder="Descripcion..."
                                    onChange={handleFormChange}
                                />
                                <button className="article-button" type="submit">Agregar</button>
                            </form>
                    </section>
                </main>
            </section>
        </div>

        );
}

export default Articles
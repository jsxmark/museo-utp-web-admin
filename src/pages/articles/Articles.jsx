import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import LeerLinea from '../../components/common/LeerLinea';
import EditarLinea from '../../components/common/EditarLinea';
import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import { ArticlesService } from '../../services/articles.service';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [addFormData, setAddFormData] = useState({
    nombre: '',
    ubicacion: '',
    categoria: '',
    descripcion: '',
    dueno: '',
  });

  const [editarData, setEditarData] = useState({
    nombre: '',
    ubicacion: '',
    categoria: '',
    descripcion: '',
    dueno: '',
  });

  const [editarArticuloId, setEditarArticuloId] = useState(null);

  useEffect(() => {
    ArticlesService.getArticles()
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  const handleEditarFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newData = { ...editarData };
    newData[fieldName] = fieldValue;

        setEditarData(newData);
    }


    const handleClicEditar = (event, articulo) => {
        event.preventDefault();
        setEditarArticuloId(articulo.idTemporal);
    setEditarData(newData);
  };

  const handleClicEditar = (event, articulo) => {
    event.preventDefault();
    setEditarArticuloId(articulo.idTemporal);

    const formValues = {
      nombre: articulo.nombre,
      ubicacion: articulo.ubicacion,
      categoria: articulo.categoria,
      dueno: articulo.dueno,
      descripcion: articulo.descripcion,
    };

    setEditarData(formValues);
  };

  const handleEditarSubmit = (event) => {
    event.preventDefault();

    const articuloEditado = {
      idTemporal: editarArticuloId,
      nombre: editarData.nombre,
      ubicacion: editarData.ubicacion,
      categoria: editarData.categoria,
      dueno: editarData.dueno,
      descripcion: editarData.descripcion,
    };

    const newArticles = articles.map((articulo) =>
      articulo.idTemporal === editarArticuloId ? articuloEditado : articulo
    );

    setArticles(newArticles);
    setEditarArticuloId(null);
  };

  const handleCancelar = () => {
    setEditarArticuloId(null);
  };

  const handleEliminar = () => {
    const newArticles = articles.filter(
      (articulo) => articulo.idTemporal !== editarArticuloId
    );

    setArticles(newArticles);
    setEditarArticuloId(null);
  };

  const handleFormChange = (event) => {
    event.preventDefault();

    const nombre = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[nombre] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleFromSubmit = (event) => {
    event.preventDefault();

    const newArticulo = {
      idTemporal: nanoid(),
      nombre: addFormData.nombre,
      ubicacion: addFormData.ubicacion,
      categoria: addFormData.categoria,
      descripcion: addFormData.descripcion,
      dueno: addFormData.dueno,
    };

    const newArticles = [...articles, newArticulo];
    setArticles(newArticles);

    // Limpiar el formulario después de agregar un artículo
    setAddFormData({
      nombre: '',
      ubicacion: '',
      categoria: '',
      descripcion: '',
      dueno: '',
    });
  };

  return (
    <div className='container'>
      <SideBar />
      <section className='main-articles'>
        <SideBarResponsive />
        <h1>Lista de Articulos</h1>
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
                <React.Fragment key={articulo.idTemporal}>
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
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </form>

                <h2>Agregar Objeto</h2>

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

        </div>

        );
}

export default Articles;
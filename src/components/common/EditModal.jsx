import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import '../../styles/editmodal.css'
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';

const EditModal = ({ article, isOpen, onClose }) => {
  const [namearticle, setNameArticle] = useState(article.nombre);
  const [location, setLocation] = useState(article.ubicacion);
  const [duenostate, setDueno] = useState(article.dueno);
  const [yearstate, setYear] = useState(article.year);
  const [description, setDescription] = useState(article.descripcion);
  const [filtercategory, setFilterCategory] = useState(article.categoria);
  const [idfotos, setIdFotos] = useState([]);
  const [mapcategory, setMapCategory] = useState([]);
  const [deletecounter, setDeleteCounter] = useState(0);

  const handleFromSubmit = (event) => {
        event.preventDefault();
        ArticlesService.updateArticle(article.id, new FormData(event.currentTarget))
        .then(() => {
          reloadServices()
          onClose();
        })
        .catch(() => {
            alert('Error en la solicitud de insercion del articulo. Por favor, inténtalo nuevamente.')
        });
  };

    const addIdDelete = (addId) => {
       if (!idfotos.includes(addId)) {
         setIdFotos([...idfotos, addId]);
         setDeleteCounter(deletecounter + 1);
      }else {
         setIdFotos(idfotos.filter((id) => id !== addId));
         setDeleteCounter(deletecounter - 1);
      }
    };

  function allArray() {
    let arr1 = [];
    for (const foto of mapfotos) {
      arr1.push(foto.id);
    }
    return arr1;
  }
  
  useEffect(() => {
      CategoriesService.getCategories().then((data) => setMapCategory(data));
  }, []);

  useEffect(() => {
      console.log(JSON.stringify(idfotos))
  });


  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="edit-modal">
      <div className="edit-modal-content">
        <h2>Editar Artículo</h2>
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
            <select
                className="select-articles"
                placeholder="Elija la facultad..."
                value={filtercategory}
                onChange={(event) => setFilterCategory(event.target.value)}>
                {mapcategory.map((mcategory) => (
                    <option
                        value={mcategory.nombre}
                        key={mcategory.id}
                        >
                        Categoria: {mcategory.nombre}
                    </option>
                ))}
            </select>
            <section className="quill-title">
                <h2>Descripción</h2>
            </section>
            <div className="editor-quill" name="descripcion">
                <textarea
                    className="article-ta"
                    type="textarea"
                    name="descripcion"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
          </div>
          <input
            type='hidden'
            name="articulosBorrarId"   
            value={JSON.stringify(idfotos)}
          />
            <input
                className="article-input"
                id='my-files'
                type="file"
                name="multimedios"
                accept=".jpg, .jpeg, .png, .gif, .mp4, .mp3, audio/*, video/*"
                multiple
            />
            <button className="article-button" type="submit">Guardar Cambios</button>
            <button className="article-button" onClick={onClose}>Cancelar</button>
        </form>
        <section>
          <h1>Cantidad de multimedios a eliminar: { deletecounter }</h1>
              <table>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                {article.fotos.map((foto) => (
                    <tr key={foto.id}>
                      <td>
                        <img src={foto.url} alt={`foto-${foto.id}`} width="50" height="50" />
                      </td>
                      <td>
                        <td>
                          <input
                            type="checkbox"
                            checked={idfotos.includes(foto.id)}
                            onChange={() => addIdDelete(foto.id)}
                          />
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
          </table>
          
          <table>
                <thead>
                  <tr>
                    <th>Video</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                {article.videos.map((video) => (
                    <tr key={video.id}>
                      <td>
                        <img src={video.url} alt={`video-${foto.id}`} width="50" height="50" />
                      </td>
                      <td>
                        <td>
                          <input
                            type="checkbox"
                            checked={idfotos.includes(foto.id)}
                            onChange={() => addIdDelete(foto.id)}
                          />
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
      </div>
    </Modal>
  );
};

export default EditModal;

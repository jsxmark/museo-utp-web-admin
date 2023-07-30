import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import '../../styles/editmodal.css'
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';

const EditModal = ({ article, isOpen, onClose }) => {
  const [multimedios, setMultimedios] = useState([]);
  const [namearticle, setNameArticle] = useState("");
  const [location, setLocation] = useState("");
  const [duenostate, setDueno] = useState("");
  const [yearstate, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [filtercategory, setFilterCategory] = useState("");
  const [mapcategory, setMapCategory] = useState([]);
  const [deletecounter, setDeleteCounter] = useState(0);
  const [idtotmultimedios, setIdTotMultimedios] = useState([]);

  const handleFromSubmit = (event) => {
    event.preventDefault();
    ArticlesService.updateArticle(article, new FormData(event.currentTarget))
    .then(() => {
      onClose();
    })
    .catch(() => {
        alert('Error en la solicitud de insercion del articulo. Por favor, inténtalo nuevamente.')
    });
  };

  async function reloadServices() {
          await ArticlesService.getArticlesById(article).then((data) => {
            setMultimedios(data);
            setNameArticle(data.nombre);
            setLocation(data.ubicacion);
            setDueno(data.dueno);
            setYear(data.year);
            setDescription(data.descripcion);
            setFilterCategory(data.categoria);
          })
          await CategoriesService.getCategories().then((data) => {
            setMapCategory(data);
          })}

    const addIdDelete = (addId) => {
      if (!idtotmultimedios.includes(addId)) {
        setIdTotMultimedios([...idtotmultimedios, addId]);
        setDeleteCounter(deletecounter + 1);
      }else {
        setIdTotMultimedios(idtotmultimedios.filter((id) => id !== addId));
        setDeleteCounter(deletecounter - 1);
      }
    };

    useEffect(() => {
      reloadServices()
    }, []);

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} className="edit-modal">
        <div className="edit-modal-content">
          <section className="title_sub-header">
            <h2>Editar Artículo</h2>
          </section>
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
                  name="categoria_id"
                  placeholder="Elija la facultad..."
                  value={filtercategory}
                  onChange={(event) => setFilterCategory(event.target.value)}>
                  {mapcategory.map((mcategory) => (
                      <option
                          value={mcategory.id}
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
                      className="article-taM"
                      type="textarea"
                      name="descripcion"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                  />
              </div>
            <input
              type='hidden'
              name="articulosBorrarId"   
              value={JSON.stringify(idtotmultimedios)}
            />
              <input
                  className="article-input"
                  id='my-files'
                  type="file"
                  name="multimedios"
                  accept=".jpg, .jpeg, .png, .gif, .mp4, .mp3, audio/*, video/*"
                  multiple
              />
              <button className="article-buttonM" type="submit">Guardar Cambios</button>
              <button className="article-button" onClick={onClose}>Cancelar</button>
          </form>
          <section>
            <section className="title_header">
              <h1>Cantidad de multimedios a eliminar: { deletecounter }</h1>
            </section>
              <table>
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Array.isArray(multimedios.fotos) && multimedios.fotos.length > 0 ? (
                    multimedios.fotos.map((foto) => (
                      <tr key={foto.id}>
                        <td>
                          <img src={foto.url} alt={`foto-${foto.id}`} width="50" height="50" />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={idtotmultimedios.includes(foto.id)}
                            onChange={() => addIdDelete(foto.id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No hay fotos disponibles.</p>
                  )}
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
                  {Array.isArray(multimedios.videos) && multimedios.videos.length > 0 ? (
                    multimedios.videos.map((video) => (
                      <tr key={video.id}>
                        <td>
                          <video width="100" height="100" controls>
                            <source src={video.url} type="video/mp4" />
                          </video>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={idtotmultimedios.includes(video.id)}
                            onChange={() => addIdDelete(video.id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No hay videos disponibles.</p>
                  )}
                  </tbody>
              </table>
            
              <table>
                  <thead>
                    <tr>
                      <th>Audio</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Array.isArray(multimedios.audios) && multimedios.audios.length > 0 ? (
                    multimedios.audios.map((audio) => (
                      <tr key={audio.id}>
                        <td>
                          <audio controls>
                            <source src={audio.url} type="audio/mpeg" />
                          </audio>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={idtotmultimedios.includes(audio.id)}
                            onChange={() => addIdDelete(audio.id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No hay audios disponibles.</p>
                  )}
                  </tbody>
              </table>
          </section>
        </div>
      </Modal>
    );
};

export default EditModal;

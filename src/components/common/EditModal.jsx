import React, { useState } from 'react';
import Modal from 'react-modal'
import '../../styles/editmodal.css'

const EditModal = ({ article, isOpen, onClose, onSave }) => {
  const [editedArticle, setEditedArticle] = useState(article);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedArticle);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="edit-modal">
      <div className="edit-modal-content">
        <h2>Editar Artículo</h2>
        {/* Aquí coloca los campos para editar los datos del artículo */}
        {/* Ejemplo de un campo de edición */}
        <input
          type="text"
          name="nombre"
          value={editedArticle.nombre}
          onChange={handleChange}
        />
        {/* ... Otros campos ... */}

        <button onClick={handleSave}>Guardar cambios</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default EditModal;

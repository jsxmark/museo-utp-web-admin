import React, { useState } from 'react';
import Modal from 'react-modal';

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2>Editar Artículo</h2>
      <form>
        {/* Aquí coloca los campos para editar los datos del artículo */}
        <label>Nombre</label>
        <input type="text" name="nombre" value={editedArticle.nombre} onChange={handleChange} />
        {/* ... Otros campos ... */}
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </form>
    </Modal>
  );
};

export default EditModal;

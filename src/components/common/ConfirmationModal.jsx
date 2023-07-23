import React from "react";
import './../../styles/modal.css'

function ConfirmationModal({ show, onConfirm, onCancel }) {

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>¿Estás seguro de que deseas eliminar esta categoría?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Eliminar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;

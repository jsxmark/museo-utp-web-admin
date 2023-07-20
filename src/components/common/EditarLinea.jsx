import React from "react";

//Aqui se controla la edicion y guardado de los datos al usar el boton editar
const EditarLinea = ({editarData, handleEditarFormChange, handleCancelar}) => {
    return(
        <tr>
            <td>
                <input
                type="text"
                required
                placeholder="Ingresa el nombre"
                name="nombre"
                value={editarData.nombre}
                onChange={handleEditarFormChange}>
                </input>
            </td>
            <td>
                <input
                type="text"
                required
                placeholder="Ubicacion..."
                name="ubicacion"
                value={editarData.ubicacion}
                onChange={handleEditarFormChange}>
                </input>
            </td>
            <td>
                <input
                type="text"
                required
                placeholder="Categoria..."
                name="categoria"
                value={editarData.categoria}
                onChange={handleEditarFormChange}>
                </input>
            </td>
            <td>
            <input
                type="text"
                required
                placeholder="Dueno..."
                name="dueno"
                value={editarData.dueno}
                onChange={handleEditarFormChange}>
                </input>
            </td>
            <td>
            <input
                type="text"
                required
                placeholder="Descripcion..."
                name="descripcion"
                value={editarData.descripcion}
                onChange={handleEditarFormChange}>
                </input>
            </td>
            <td>
                <button type="submit">Guardar</button>
                <button type="button" onClick={handleCancelar}>Cancelar</button>
            </td>
        </tr>
    )
}
export default EditarLinea
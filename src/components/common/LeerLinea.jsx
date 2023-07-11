import React from "react";

const LeerLinea = ({articulo, handleClicEditar, handleEliminar}) => {
    return (
      <tr>
        <td>{articulo.nombre}</td>
        <td>{articulo.ubicacion}</td>
        <td>{articulo.categoria}</td>
        <td>{articulo.dueno}</td>
        <td>{articulo.descripcion}</td>
        <td>
            <button type="button" onClick={(event)=> handleClicEditar(event, articulo)}>Editar</button>
            <button type="button" onClick={ () => handleEliminar(articulo.id) }>Eliminar</button>
        </td>
    </tr>
    )
}
export default LeerLinea
import React from "react";

//Aqui se muestra informacion de un articulo y permite usar los botones 
const LeerLinea = ({articulo, handleClicEditar, handleEliminar}) => {
    return (
      <tr>
        <td>{articulo.nombre}</td>
        <td>{articulo.ubicacion}</td>
        <td>{articulo.categoria}</td>
        <td>{articulo.dueno}</td>
        <td>{articulo.descripcion}</td>
        <td>
            <button className="article-button" type="button" onClick={(event)=> handleClicEditar(event, articulo)}>Editar</button>
            <button className="article-button-delete" type="button" onClick={ () => handleEliminar(articulo.id) }>Eliminar</button>
        </td>
    </tr>
    )
}
export default LeerLinea
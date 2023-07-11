import '../../styles/articles.css';
import data from "../../utils/data.json"
import '../../styles/normalize.css';
import {nanoid} from "nanoid"
import {Fragment, useState} from "react"
import LeerLinea from '../../components/common/LeerLinea';
import EditarLinea from '../../components/common/EditarLinea';

function Articles() {
    
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

    const handleFormChange = (event) => {
        event.preventDefault();

        const nombre = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[nombre] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditarFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newData = {...editarData}
        newData[fieldName] = fieldValue;

        setEditarData(newData);
    }

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

    return (
        <div className="article-body">
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
                        {articulos.map((articulo) =>(
                            <>
                            {editarArticuloId === articulo.idTemporal ? (
                                <EditarLinea 
                                    editarData={editarData}
                                    handleEditarFormChange={handleEditarFormChange}
                                    handleCancelar={handleCancelar}/> 
                                    ) : (
                                        <LeerLinea 
                                            articulo={articulo}
                                            handleClicEditar={handleClicEditar}
                                            handleEliminar={handleEliminar}/> 
                                            )}
                            </>
                            ))}
                    </tbody>
                </table>
            </form>

            <h2>Agregar Objeto</h2>

            <form onSubmit={handleFromSubmit}>
                <input 
                    type="text" 
                    name="nombre"
                    required
                    placeholder="Ingrese Nombre..."
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="ubicacion"
                    required
                    placeholder="Se encuentra en..."
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="categoria"
                    required
                    placeholder="Ingrese Categoria..."
                    onChange={handleFormChange}
                />
                <input
                    type="text" 
                    name="dueno"
                    required
                    placeholder="Pertenece a...?"
                    onChange={handleFormChange}
                />
                <input 
                    type="text" 
                    name="descripcion"
                    required
                    placeholder="Descripcion..."
                    onChange={handleFormChange}
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
        );
}

export default Articles

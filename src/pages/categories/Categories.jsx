import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css';
import { useState, useEffect } from "react"
import data from "../../utils/data.json"
import LeerLinea from '../../components/common/LeerLinea';
import EditarLinea from '../../components/common/EditarLinea';
import { CategoriesService } from '../../services/categories.service';

function Categories() {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        CategoriesService.getCategories().then((data) => setCategories(data));
        console.log(categories)
    }, []);

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

    //Función para manejar los cambios en el formulario al editar un articulo
    const handleEditarFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newData = {...editarData}
        newData[fieldName] = fieldValue;

        setEditarData(newData);
    }

    //Función para manejar el clic en el botón de editar de un artículo específico
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

    //Función para manejar el envío del formulario de edición de un artículo
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


    //Funcion para cancelar la edicion de un articulo
    const handleCancelar = () => {
        setEditarArticuloId(null);
    }


    //Funcion para eliminar un articulo
    const handleEliminar = () => {
        const newArticulo = [...articulos];

        const index = articulos.findIndex((articulo) => articulo.idTemporal === editarArticuloId);

        newArticulo.splice(index, 1);

        setArticulos(newArticulo);
    }

    //----Funciones para agregar un articulo----

    //actualiza el estado del formulario
    const handleFormChange = (event) => {
        event.preventDefault();

        const nombre = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[nombre] = fieldValue;

        setAddFormData(newFormData);
    };

    //agrega el nuevo articulo a la lista
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

    return (
      <div className='container'>
            <SideBar />

            <section className="main">

                <SideBarResponsive />
                
                <h1>Lista de Articulos</h1>
                <div>
                    <h2>Categorías</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            {/* Agrega más encabezados según los campos de tus categorías */}
                        </tr>
                        </thead>
                        <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.nombre}</td>
                            {/* Agrega más celdas según los campos de tus categorías */}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

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
      
  )
}

export default Categories
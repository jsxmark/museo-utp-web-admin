import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css';
import { useState, useEffect } from "react"
import { CategoriesService } from '../../services/categories.service';

function Categories() {

    const [categories, setCategories] = useState([]);
    const [namecategories, setNameCategories] = useState('');
    const mappingCategories = CategoriesService.getCategories().then((data) => setCategories(data));
    
    useEffect(() => {
        mappingCategories
    }, []);

    const handleFromSubmit = (event) => {
        event.preventDefault();
        CategoriesService.postCategories(namecategories)
            .then(() => {
                mappingCategories
                alert('Categoría creada exitosamente');
            })
            .catch(() => {
                alert('Error en la solicitud de insercion de categoria. Por favor, inténtalo nuevamente.')
            });
    };

    const handleDelete = (id) => {
        

    }

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
                            <th>Nombre de Categorías</th>
                            <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.nombre}</td>
                                <td>
                                <button className="article-button-delete" onClick={() => handleDelete(category.id)}>Eliminar</button>
                                </td>
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
                        placeholder="Ingrese el nombre de la categoria..."
                        value={namecategories}
                        onChange={(event) => setNameCategories(event.target.value)}
                    />
                    <button className="article-button" type="submit">Agregar</button>
                </form>
            </section>
      </div>
  )
}

export default Categories
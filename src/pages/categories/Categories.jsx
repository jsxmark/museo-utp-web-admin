import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import '../../styles/articles.css';
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
                setNameCategories('')
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
                
                <main class="table">
                    <section class="table_header">
                        <h1>Lista de Categorías</h1>
                    </section>
                    <section class="table_body">
                        <section class="table_header">
                            <h1>Categorías</h1>
                        </section>
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Accion</th>
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
                    </section>

                    <section class="table_header">
                        <h2>Agregar Categoría</h2>
                    </section>

                    <section class="table_body">
                        <form onSubmit={handleFromSubmit}>
                            <input
                                className="article-input"
                                type="text" 
                                name="descripcion"
                                required
                                placeholder="Descripcion..."
                                value={namecategories}
                                onChange={(event) => setNameCategories(event.target.value)}
                            />
                            <button className="article-button" type="submit">Agregar</button>
                        </form>
                    </section>
                </main>
            </section>
      </div>
  )
}

export default Categories
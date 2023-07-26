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
    function reloadTable() {
        CategoriesService.getCategories().then((data) => setCategories(data));
    }

    useEffect(() => {
        reloadTable()
    }, []);
   
    const handleFromSubmit = (event) => {
        event.preventDefault();
        const confirmAdd = window.confirm("¿Estás seguro de que deseas agregar esta categoría?");
        if (confirmAdd) {
            CategoriesService.postCategories(namecategories)
            .then(() => {
                reloadTable()
                setNameCategories('')
            })
            .catch(() => {
                alert('Error en la solicitud de insercion de categoria. Por favor, inténtalo nuevamente.')
            });
        }
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta categoría?");
        if (confirmDelete) {
            CategoriesService.deleteCategories(id)
            .then(() => {
                reloadTable()
                setNameCategories('')
            })
            .catch(() => {
                alert('Error en la solicitud de borrado de categoria. Por favor, inténtalo nuevamente.')
            });
        }  
    }

    return (
      <div className='container'>
            <SideBar />

            <section className="main" id='bgimage1'>

                <SideBarResponsive />
                
                <main class="table">
                    <section class="table_header">
                        <h1>Lista de Categorías</h1>
                    </section>
                    <section class="table_sub-header">
                        <h2>Categorías</h2>
                    </section>
                    <section class="table_body" id='t_body'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.nombre}</td>
                                    <td>
                                        <button className="article-button-delete" onClick={() => handleDelete(category.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>

                    <section class="table_sub-header">
                        <h2>Agregar Categoría</h2>
                    </section>

                    <section class="table_form" id='t_form'>
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
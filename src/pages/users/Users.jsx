import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import '../../styles/articles.css';
import { useState, useEffect } from "react"
import { UsersService } from '../../services/users.service';

function Students() {
    const [users, setUsers] = useState([]);
    function reloadTable() {
        UsersService.getUsers().then((data) => setUsers(data));
    }

    useEffect(() => {
        reloadTable()
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta facultad?");
        if (confirmDelete) {
            FacultiesService.deleteFaculties(id)
            .then(() => {
                reloadTable()
                setNameFaculties('')
            })
            .catch(() => {
                alert('Error en la solicitud de borrado de categoria. Por favor, inténtalo nuevamente.')
            });
        }  
    }

    return (
      <div className='container'>
            <SideBar />

            <section className="main" id='bgimage2'>

                <SideBarResponsive />
                
                <main class="table">
                    <section class="table_header">
                        <h1>Lista de Facultades</h1>
                    </section>
                    <section class="table_sub-header">
                        <h2>Facultad</h2>
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
                            {faculties.map((faculty) => (
                                <tr key={faculty.id}>
                                    <td>{faculty.nombre}</td>
                                    <td>
                                        <button className="article-button-delete" onClick={() => handleDelete(faculty.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                </main>
            </section>
      </div>
  )
}

export default Students
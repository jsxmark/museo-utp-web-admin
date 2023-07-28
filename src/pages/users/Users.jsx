import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import '../../styles/articles.css';
import { useState, useEffect } from "react"
import { UsersService } from '../../services/users.service';

function Users() {
    const [users, setUsers] = useState([]);
    function reloadTable() {
        UsersService.getUsers().then((data) => setUsers(data));
    }

    useEffect(() => {
        reloadTable()
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este Usuario?");
        if (confirmDelete) {
            UsersService.deleteUsers(id)
            .then(() => {
                reloadTable()
            })
            .catch(() => {
                alert('Error en la solicitud de borrado de Usuario. Por favor, inténtalo nuevamente.')
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
                        <h1>Lista de Usuarios</h1>
                    </section>
                    <section class="table_sub-header">
                        <h2>Usuarios</h2>
                    </section>
                    <section class="table_body" id='t_bodyU'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((users) => (
                                <tr key={users.id}>
                                    <td>{users.nombre}  {users.apellido}</td>
                                    <td>{users.rol}</td>
                                    {users.rol === "ESTUD" && (
                                        <td>
                                            <button className="article-button-delete" onClick={() => handleDelete(users.id)}>Eliminar</button>
                                        </td>
                                        )}
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

export default Users
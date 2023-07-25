import SideBar from '../../components/common/SideBar';
import SideBarResponsive from '../../components/common/SideBarResponsive';
import '../../styles/dashboard.css'
import '../../styles/normalize.css'
import '../../styles/articles.css';
import { useState, useEffect } from "react"
import { FacultiesService } from '../../services/faculties.service';
import { CareersService } from '../../services/careers.service';

function Careers() {
    const [careers, setCareers] = useState([]);
    const [namecareers, setNameCareers] = useState('');
    const [faculties, setFaculties] = useState([]);
    const [mapfaculties, setMapFaculties] = useState([]);
    function reloadServices() {
        FacultiesService.getFaculties().then((data) => setMapFaculties(data));
        CareersService.getCareers().then((data) => setCareers(data));
    }

    useEffect(() => {
        reloadServices()
    }, []);
   
    const handleFromSubmit = (event) => {
        event.preventDefault();
        const confirmAdd = window.confirm("¿Estás seguro de que deseas agregar esta carrera?");
        if (confirmAdd) {
            CareersService.postCareers(namecareers, faculties)
            .then(() => {
                reloadServices()
                setNameCareers('')
            })
            .catch(() => {
                alert('Error en la solicitud de insercion de la carrera. Por favor, inténtalo nuevamente.')
            });
        }
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta carrera?");
        if (confirmDelete) {
            CareersService.deleteCareers(id)
            .then(() => {
                reloadServices()
                setNameCareers('')
            })
            .catch(() => {
                alert('Error en la solicitud de borrado de carrera. Por favor, inténtalo nuevamente.')
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
                        <h1>Lista de Carreras</h1>
                    </section>
                    <section class="table_sub-header">
                        <h2>Carrera</h2>
                    </section>
                    <section class="table_body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Facultad a la que pertenece</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {careers.map((career) => (
                                <tr key={career.id}>
                                    <td>{career.nombre}</td>
                                    <td>{career.facultad}</td>
                                    <td>
                                        <button className="article-button-delete" onClick={() => handleDelete(career.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>

                    <section class="table_sub-header">
                        <h2>Agregar Carrera</h2>
                    </section>

                    <section class="table_form">
                        <form onSubmit={handleFromSubmit}>
                            <input
                                className="article-input"
                                type="text" 
                                name="descripcion"
                                required
                                placeholder="Descripcion..."
                                value={namecareers}
                                onChange={(event) => setNameCareers(event.target.value)}
                            />
                            <select
                                className="select-articles"
                                name="facultad"
                                required
                                placeholder="Elija la facultad..."
                                value={faculties}
                                onChange={(event) => setFaculties(event.target.value)}>
                                {mapfaculties.map((mfaculties) => (
                                    <option
                                        value={mfaculties.id}
                                        key={mfaculties.id}
                                        >
                                        Facultad: {mfaculties.nombre}
                                    </option>
                                ))}
                            </select>
                            <button className="article-button" type="submit">Agregar</button>
                        </form>
                    </section>
                </main>
            </section>
      </div>
  )
}

export default Careers
import axios from "axios";

const host_pruebas = "https://2726-190-219-223-92.ngrok-free.app/api"
const host_principal = "https://ds6.glaciar.club/api"

const BASE_URL = host_pruebas;

const getFaculties = async () => {
    try {
        return (await axios.get(BASE_URL + '/facultades/all')).data
    } catch (error) {
        throw new Error('Error en la solicitud de busqueda de facultades: '+error);
    }
};

const postFaculties = async (namefaculty) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
        };
        return (await axios.post(BASE_URL + '/facultades/', JSON.stringify({ nombre: namefaculty }), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de facultades: '+error);
    }
};

const deleteFaculties = async (idfaculty) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
        };
        return (await axios.delete(BASE_URL.concat('/facultades/').concat(idfaculty), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de facultad: '+error);
    }
};

export const FacultiesService = {
    getFaculties,
    postFaculties,
    deleteFaculties,
}
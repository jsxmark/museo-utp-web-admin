import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getFaculties = async () => {
    try {
        const config = {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.get(API_BASE_URL.concat('/facultades/all'), config)).data
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
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.post(API_BASE_URL.concat('/facultades/'), JSON.stringify({ nombre: namefaculty }), config)).data
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
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.delete(API_BASE_URL.concat('/facultades/').concat(idfaculty), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de facultad: '+error);
    }
};

export const FacultiesService = {
    getFaculties,
    postFaculties,
    deleteFaculties,
}
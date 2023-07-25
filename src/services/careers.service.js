import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getCareers = async () => {
    try {
        const config = {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.get(API_BASE_URL.concat('/carreras/all'), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de busqueda de carreras: '+error);
    }
};

const postCareers = async (namecareer, faculty) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.post(API_BASE_URL.concat('/carreras/'), JSON.stringify({ nombre: namecareer , facultad_id: faculty}), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de carreras: '+error);
    }
};

const deleteCareers = async (idcareer) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.delete(API_BASE_URL.concat('/carreras/').concat(idcareer), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de eliminacion de carrera: '+error);
    }
};

export const CareersService = {
    getCareers,
    postCareers,
    deleteCareers,
}
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getUsers = async () => {
    try {
        const config = {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.get(API_BASE_URL.concat('/usuarios/all'), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de busqueda de facultades: '+error);
    }
};

const deleteUsers = async (idusers) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.delete(API_BASE_URL.concat('/usuarios/').concat(idusers), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de eliminacion de usuarios: '+error);
    }
};

export const UsersService = {
    getUsers,
    deleteUsers,
}
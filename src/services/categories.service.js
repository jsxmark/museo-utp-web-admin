import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getCategories = async () => {
    try {
        const config = {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.get(API_BASE_URL.concat('/categorias/all'), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de busqueda de categorias: '+error);
    }
};

const postCategories = async (namecategories) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.post(API_BASE_URL.concat('/categorias/'), JSON.stringify({ nombre: namecategories }), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de categoria: '+error);
    }
};

const deleteCategories = async (idcategory) => {
    try {
        const config = {
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.delete(API_BASE_URL.concat('/categorias/').concat(idcategory), config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de adicion de categoria: '+error);
    }
};

export const CategoriesService = {
    getCategories,
    postCategories,
    deleteCategories,
}
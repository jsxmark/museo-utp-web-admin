import axios from "axios";

const host_pruebas = "http://localhost:8080/api"
const host_principal = "https://ds6.glaciar.club/api"

const BASE_URL = host_principal;

const getCategories = async () => {
    try {
        return (await axios.get(BASE_URL + '/categories/all')).data
    } catch (error) {
        throw new Error('Error en la solicitud de busqueda de categorias: '+error);
    }
};

export const CategoriesService = {
    getCategories,
}
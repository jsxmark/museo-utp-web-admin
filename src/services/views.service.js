import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getViewsById = async (id) => {
  try {
    const config = {
      headers: {
        'x-token': localStorage.getItem('token'),
        'ngrok-skip-browser-warning': 'true',
      },
    };
    const response = await axios.get(API_BASE_URL.concat('/visitantes/').concat(id), config);
    return response.data.length;
  } catch (error) {
    throw new Error("Error en la solicitud de búsqueda de cantidad de visitas: " + error);
  }
};

export const ViewsService = {
    getViewsById,
}
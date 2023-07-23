import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const getArticles = async () => {
  try {
    const config = {
          headers: {
              'ngrok-skip-browser-warning': 'true',
          },
      };
     return (await axios.get(API_BASE_URL.concat('/articulos/all'), config)).data
  } catch (error) {
    throw new Error("Error en la solicitud de búsqueda de artículos: " + error);
  }
};

const addArticle = async (article) => {
    try {
      const response = await axios.post(API_BASE_URL.concat("/articulos"), article);
      return response.data;
    } catch (error) {
      throw new Error("Error al agregar el artículo: " + error);
    }
  };
  
  const updateArticle = async (id, article) => {
    try {
      const response = await axios.put(BASE_URL + `/articulos/${id}`, article);
      return response.data;
    } catch (error) {
      throw new Error("Error al actualizar el artículo: " + error);
    }
  };
  
  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete(BASE_URL + `/articulos/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error al eliminar el artículo: " + error);
    }
  };

export const ArticlesService = {
  getArticles,
  addArticle,
  updateArticle,
  deleteArticle,
};
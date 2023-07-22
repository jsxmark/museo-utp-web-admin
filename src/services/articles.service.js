import axios from "axios";

const host_principal = "https://ds6.glaciar.club/api";

const BASE_URL = host_principal;

const getArticles = async () => {
  try {
    const response = await axios.get(BASE_URL + "/articulos/all");
    return response.data;
  } catch (error) {
    throw new Error("Error en la solicitud de búsqueda de artículos: " + error);
  }
};

const addArticle = async (article) => {
    try {
      const response = await axios.post(BASE_URL + "/articulos", article);
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
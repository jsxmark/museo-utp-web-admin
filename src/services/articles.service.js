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

export const ArticlesService = {
  getArticles,
};
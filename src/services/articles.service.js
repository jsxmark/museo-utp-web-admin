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

const postArticle = async (formadata) => {
  try {
      const config = {
          headers: {
          'x-token': localStorage.getItem('token'),
        },
    };
        return (await axios.post(API_BASE_URL.concat('/articulos/'), JSON.parse(formadata.get('data')), config)).data;
    } catch (error) {
        throw new Error('Error en la solicitud de adición del artículo: ' + error);
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
  
  const deleteArticle = async (idarticle) => {
      try {
          const config = {
              headers: {
                  'x-token': localStorage.getItem('token'),
                  'Content-Type': 'application/json',
                  'ngrok-skip-browser-warning': 'true',
              },
          };
          return (await axios.delete(API_BASE_URL.concat('/articulos/').concat(idarticle), config)).data
      } catch (error) {
          throw new Error('Error en la solicitud de eliminacion de articulo: '+error);
      }
  };

export const ArticlesService = {
  getArticles,
  postArticle,
  updateArticle,
  deleteArticle,
};
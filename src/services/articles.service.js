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

const getArticlesById = async (id) => {
  try {
    const config = {
          headers: {
              'ngrok-skip-browser-warning': 'true',
          },
    };
     return (await axios.get(API_BASE_URL.concat('/articulos/').concat(id), config)).data
  } catch (error) {
    throw new Error("Error en la solicitud de búsqueda de artículos: " + error);
  }
};

const postArticle = async (formadata) => {
  try {
      const config = {
          headers: {
          'x-token': localStorage.getItem('token'),
          'Content-Type':'multipart/form-data'
        },
    };
        return (await axios.post(API_BASE_URL.concat('/articulos/'), formadata, config));
    } catch (error) {
        throw new Error('Error en la solicitud de adición del artículo: ' + error);
    }
};
  
const updateArticle = async (id, formadataupdate) => {
  try {
      const config = {
          headers: {
          'x-token': localStorage.getItem('token'),
          'Content-Type':'multipart/form-data'
        },
    };
        return (await axios.put(API_BASE_URL.concat(`/articulos/${id}`), formadataupdate, config));
    } catch (error) {
        throw new Error('Error al actualizar el artículo: ' + error);
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
  getArticlesById,
  postArticle,
  updateArticle,
  deleteArticle,
};
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
  const url = API_BASE_URL.concat('/articulos/');
  const headers = {
    'x-token': localStorage.getItem('token'),
  };
  const body = formadata;

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: body,
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Error al enviar el artículo.');
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
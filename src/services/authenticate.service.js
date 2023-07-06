import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const login = async (email, password) => {
  return await axios.post(BASE_URL+'/user', { email, password })
  .then((response) => {
      console.log(response.data)
  })
  .catch((error) => {
      console.error(error);
  });
};

export const AuthenticateService = {
    login,
}

import axios from "axios";

const BASE_URL = "https://0371-190-219-223-152.ngrok-free.app/";

const login = async (username, password) => {
    try {
        return (await axios.post(BASE_URL + 'usuario/', {nombre_usuario: username, contrasena: password, rol: 'admin'})).data
    } catch (error) {
        throw new Error('Error en la solicitud de inicio de sesión: '+error);
    }
};

const register = async (firstName, lastName, email, password) => {
    try {
      return (
        await axios.post(BASE_URL + 'registro/', {
          nombre: firstName,
          apellido: lastName,
          correo: email,
          contrasena: password,
        })
      ).data;
    } catch (error) {
      throw new Error('Error en la solicitud de registro: ' + error);
    }
  };

export const AuthenticateService = {
    login,
    register
}

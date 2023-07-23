import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const login = async (username, password) => {
    try {
         const config = {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        };
        return (await axios.post(API_BASE_URL.concat('/auth/login'), {nombre_usuario: username, password: password}, config)).data
    } catch (error) {
        throw new Error('Error en la solicitud de inicio de sesión: '+error);
    }
};

const register = async (firstName, lastName, email, password) => {
    try {
        return (
            await axios.post(API_BASE_URL + 'registro/', {
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
    register,
}
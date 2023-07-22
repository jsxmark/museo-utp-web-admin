import axios from "axios";

const host_pruebas = "http://localhost:8080/api"
const host_principal = "https://ds6.glaciar.club/api"

const BASE_URL = host_principal;

const login = async (username, password) => {
    try {
        return (await axios.post(BASE_URL + '/auth/login', {nombre_usuario: username, password: password})).data
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
    register,
    //checkrol
}
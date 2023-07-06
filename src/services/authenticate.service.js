import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const login = async (email, password) => {
    try {
        return (await axios.post(BASE_URL + 'user/', {email, password})).data
    } catch (error) {
        throw new Error('Error en la solicitud de inicio de sesión: '+error);
    }
};

export const AuthenticateService = {
    login,
}

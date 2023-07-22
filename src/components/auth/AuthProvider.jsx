import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    allowSession: (data) => {},
    endSession: () => {},
});

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
       checkSession()
    }, [])
    
    function allowSession(token) {
        localStorage.setItem('token', token);
    }

    function endSession() {
        localStorage.removeItem('token')
        window.location.reload()
    }

    const checkSession = () => {
        if (localStorage.getItem("token")) 
            setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, allowSession, endSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)
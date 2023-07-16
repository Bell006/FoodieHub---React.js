import { createContext, useContext, useState } from "react";
import { api } from '../services/api';
import { useEffect } from "react";
import { json } from "react-router-dom";


export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [data, setData] = useState({});

    async function signIn({email, password}) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token, adminCheck } = response.data;

            localStorage.setItem("@foodieHub:user", JSON.stringify(user));
            localStorage.setItem("@foodieHub:token", token);
            localStorage.setItem("@foodieHub:admin", adminCheck);

            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({ user, token, adminCheck });

            
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível conectar.")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@foodieHub:user");
        localStorage.removeItem("@foodieHub:token");
        localStorage.removeItem("@foodieHub:admin");

        setData({})
    }
    
    
    useEffect(() => {
        const user = localStorage.getItem("@foodieHub:user");
        const token = localStorage.getItem("@foodieHub:token");
        const adminCheck = localStorage.getItem("@foodieHub:admin");

        api.defaults.headers.common['authorization'] = `Bearer ${token}`;

        if(user && token && adminCheck) {
            setData({
                user: JSON.parse(user),
                token,
                adminCheck
            })
        }


    }, []);
 
    return(
        <AuthContext.Provider value={{
            user: data.user,
            adminCheck: data.adminCheck,
            signIn,
            signOut
            }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };
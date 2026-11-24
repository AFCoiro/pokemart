import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const context = useContext (AuthContext);

    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (fbUser)=>{
            setUser(fbUser);
            setLoading(false);
        })
        return unsuscribe;
    },[]) 

    const login = (email, password)=>{
        return signInWithEmailAndPassword (auth,email, password);
    }

    const logout = async ()=>{
        try{
            navigate("/", {replace: true});
            await signOut(auth);
        }
        catch(error){
            console.log('Error al cerrar la sesión: ',error);
        }
    }

    return(
        <AuthContext.Provider value={{user, loading, login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
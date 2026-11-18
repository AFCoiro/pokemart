import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext();

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

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (fbUser)=>{
            setUser(fbUser);
            setLoading(false);
        })
        return unsuscribe;
    },[]) 

    const login = (email, password)=>{
        return signInWithEmailAndPassword (email, password);
    }

    const logout = async ()=>{
        try{
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
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext()
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe()
        }
    }, [])

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const authInfo = {
        user, createUser, signIn, loading, logOut,googleLoginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
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
        return unsubscribe()
    }, [])

    const logOut=(auth)=>{
        return signOut(auth)
    }
    const authInfo = {
        user, createUser, signIn, loading, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
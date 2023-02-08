import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    // create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //sign out user
    const logOut = () => {
        return signOut(auth)
    }

    // why are we doing this?
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // console.log('auth state changed', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
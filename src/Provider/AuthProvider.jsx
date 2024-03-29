/* eslint-disable react/prop-types */
import { createContext } from "react";
import auth from "../firebase/firebase.confiq"
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')


    const AuthofGoogle = new GoogleAuthProvider();
    const AuthofFacebook = new FacebookAuthProvider();


    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const addProfileNameAndPicture = (name, picture) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
        })
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const loginWithGoogle = () => {
        return signInWithPopup(auth, AuthofGoogle)
    }

    const loginWithFacebook = () => {
        return signInWithPopup(auth, AuthofFacebook)
    }


    const userLogout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentuser => {
            console.log("spying on ", currentuser);
            setUser(currentuser);
        })
        return () => {
            () => unsubscribed();
        }
    }, [])

    const authinfo = { register, addProfileNameAndPicture, user, userLogout, loginUser, loginWithGoogle, loginWithFacebook }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
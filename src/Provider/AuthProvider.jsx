/* eslint-disable react/prop-types */
import { createContext } from "react";
import auth from "../firebase/firebase.confiq"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const addProfileNameAndPicture = (name, picture) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
        })
    }


    const authinfo = { register, addProfileNameAndPicture }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
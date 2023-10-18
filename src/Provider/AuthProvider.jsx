import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new user
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUser = (name, photo) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Login user
    const loginUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logut user
    const logoutUser = () => {
        // setLoading(true);
        return signOut(auth);
    }

    // Handle State changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        updateUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.config'
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // user Registration
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user login by google
    const userLoginByGoogle = () => {
        const googleProvider= new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }
    // user login by twitter
    const userLoginByTwitter = () => {
        const twitterProvider= new TwitterAuthProvider()
        return signInWithPopup(auth,twitterProvider)
    }
    // user logout
    const userLogout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => unSubscribe()
    }, []);

    const data = { user, userRegister, userLogin, userLogout,userLoginByGoogle,userLoginByTwitter }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
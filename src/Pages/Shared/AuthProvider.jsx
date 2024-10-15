import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // method 1
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // method 2
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // method 3
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // method 4 
    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // method 5
    const signWithTwitter = () => {
        return signInWithPopup(auth, twitterProvider)
    }

    // method 6
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, setUser, loading, createUser, signInUser, signWithGoogle, signWithTwitter, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
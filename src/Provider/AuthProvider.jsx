import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signPopup(provider) {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            console.log(user)
        });

        return ()=>{
             unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signPopup
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
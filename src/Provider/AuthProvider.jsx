import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const[loading,setLoading] = useState(true)

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signPopup(provider){
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
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
        signPopup,
        loading
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
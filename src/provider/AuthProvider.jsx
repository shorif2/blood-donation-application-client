import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)


    console.log(user);
    useEffect(() => {
        // Observer 
        const observerRequest = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser)
            setLoading(false)
            console.log(auth);
        })
        return () => observerRequest()
    }, [])

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    const logout =() =>{
        setLoading(true)
          return signOut(auth)
      }
      // Update a user's profile

    const updateUser =(user, name, url)=>{
        return updateProfile(user, {
         displayName: name,
         photoURL: url,
        })
     }

    //   Auth Info
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        updateUser,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
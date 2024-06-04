import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const Mycontext = createContext();

export const setMyContext = () => useContext(Mycontext);

export default ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const userSignOut = () => signOut(auth);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    useEffect(() => (unsubscribe), [])


    return <Mycontext.Provider value={{ user, setUser, signUp, signIn, userSignOut }}>
        <Mycontext.Consumer>
            {() => children}
        </Mycontext.Consumer>
    </Mycontext.Provider>
}
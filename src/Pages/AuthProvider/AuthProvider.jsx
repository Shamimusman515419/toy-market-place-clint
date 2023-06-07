import { createContext, useEffect, useState } from "react";


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../FirebaseConfig/Firebase.config";

import axios from "axios";
export const AuthContact = createContext();
const AuthProvider = ({ children }) => {

     const [loading, setLoading] = useState(false)
     const [user, setUser] = useState(null)
     const auth = getAuth(app);
     const GoogleProvider = new GoogleAuthProvider();

     const CreateUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const GoogelSing = () => {
          return signInWithPopup(auth, GoogleProvider)
     }

     const Login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               console.log(currentUser);
               if (currentUser?.email) {
                    axios.post('http://localhost:5000/jwt')
                    .then(data=>{
                          localStorage.setItem('access-token', data.data.token)
                    }).catch(error=>{
                          console.log(error);
                    })

               } else {
                    localStorage.removeItem('access-token')
               }
               setLoading(false)

          })
          return () => {
               unsubcript()
          }
     }, []);

     const LogOut = () => {
          return signOut(auth)
     }

     const userInfo = {
          CreateUser,
          LogOut,
          loading,
          GoogelSing,
          Login,
          user
     }

     return (
          <div>
               <AuthContact.Provider value={userInfo}>
                    {children}
               </AuthContact.Provider>
          </div>
     );
};

export default AuthProvider;
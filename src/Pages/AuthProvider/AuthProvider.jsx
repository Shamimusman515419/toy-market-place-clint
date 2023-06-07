import { createContext, useEffect, useState } from "react";

export const AuthContact = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../FirebaseConfig/Firebase.config";
const AuthProvider = ({ children }) => {

     const [loading, setLoading] = useState(false)
     const [user,setUser]=useState(null)
     const auth = getAuth(app);
     const GoogleProvider = new GoogleAuthProvider();

     const CreateUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const GoogelSing = () => {
          return signInWithPopup(auth, GoogleProvider)
     }

     const Login=(email,password)=>{
           return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
                
                 setLoading(false)
               
          })
          return () => {
               unsubcript()
          }
     }, []);

     const LogOut =()=>{
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
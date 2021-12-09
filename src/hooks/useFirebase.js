import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import initializeAuthentication from '../config/firebase';

//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate()


    //on State Change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }else {
                setUser({})
            }
            setIsLoading(false);

        })
        return () => {
            unsubscribed();
        }
    }, [auth])

    //sign up functionality
    const signUpUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    swal("Good job!", "Account has been created!", "success");
                    navigate('/')
                })

            }).catch(err => swal("Something went wrong!", `${err.message}`, "error")).finally(() => {
                setIsLoading(false);
            })
    }

    //sign in functionality
    const signInUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                swal("Sign in Successful!", "Welcome back !", "info");
                navigate('/')
            })
            .catch(err => swal("Something went wrong!", `${err.message}`, "error")).finally(() => {
                setIsLoading(false);
            })
    }


    //google sign in 
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                swal("Good job!", "Account has been created!", "success");
                navigate('/')
            }).catch(err => console.log(err.message)).finally(() => setIsLoading(false));
    }

    // sign out 
    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            navigate('/login')
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        }).finally(() => setIsLoading(false));
    }

    return {
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        isLoading
    }
}

export default useFirebase

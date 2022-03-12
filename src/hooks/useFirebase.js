import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import initializeAuthentication from '../config/firebase';

//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [newUser,setNewUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://api.powermall.com.bd/users?email=${user?.email}`)
            .then(response => {
                setNewUser(response.data)
            })
    }, [user?.email])

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
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    setUser(res?.user);
                    navigate('/')
                    axios.post('https://api.powermall.com.bd/users', {
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                        image: "https://i.ibb.co/tpy9mwM/user.png",
                        role: 'Customer',
                        usedCoupon:[],
                        wishlist:[]
                    }).then((res) => {
                        window.location.reload()
                        swal("Good job!", "Account has been created!", "success");
                    })  
                        
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
                setUser(res?.user);
                navigate('/')                
                axios.get(`https://api.powermall.com.bd/users?email=${res?.user?.email}`)
                    .then(response => {
                        if (response?.data?.email === res?.user?.email) {
                            swal("Good job!", "Logged In!", "success");
                        } else {
                            axios.post('https://api.powermall.com.bd/users', {
                                name: res?.user?.displayName,
                                email: res.user.email,
                                image: "https://i.ibb.co/tpy9mwM/user.png",
                                role: 'Customer',
                                usedCoupon: [],
                                wishlist: []
                            }).then((res) => {
                                window.location.reload()
                                swal("Good job!", "Account has been created!", "success");
                            })
                        }
                    })
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
                setUser(res?.user);
                navigate('/')
                axios.get(`https://api.powermall.com.bd/users?email=${res?.user?.email}`)
                    .then(response => {
                        if (response?.data?.email === res?.user?.email){
                            swal("Good job!", "Logged In!", "success");
                        }else{
                            axios.post('https://api.powermall.com.bd/users', {
                                name: res?.user?.displayName,
                                email: res.user.email,
                                image: res.user.photoURL,
                                role: 'Customer',
                                usedCoupon: [],
                                wishlist: []

                            }).then((res) => {
                                window.location.reload()
                                swal("Good job!", "Account has been created!", "success");
                            })
                        }
                    })
                
            }).catch(err => alert(err.message)).finally(() => setIsLoading(false));
    }

    //phone number sign in 
    // const signInWithPhone = (phone) => {
    //     // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

    //     // const appVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    //     const appVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

    //     signInWithPhoneNumber(auth, phone, appVerifier)
    //         .then((confirmationResult) => {
    //             alert('f')
    //             // SMS sent. Prompt user to type the code from the message, then sign the
    //             // user in with confirmationResult.confirm(code).
    //             let code = prompt('Enter the otp','');
    //             confirmationResult.confirm(code).then(e => {
    //             })
    //             window.confirmationResult = confirmationResult;
    //             // console.log
    //             // ...
    //         }).catch((error) => {
    //             // Error; SMS not sent
    //             // ...
    //         });

    // }

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
        newUser,
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        // signInWithPhone,
        isLoading
    }
}

export default useFirebase

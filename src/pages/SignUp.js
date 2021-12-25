import React from 'react'
import { Helmet } from 'react-helmet'
import SignUpForm from '../components/Sign Up/SignUpForm'

const SignUp = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SignUp</title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <main className="bg-secondary h-screen  w-full">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col my-24 lg:justify-center justify-start">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-content-center">
                        {/* vector image  */}
                        <div className="hidden lg:block order-2">
                            <img src="../../assets/signUp.png" alt="login" className=" object-contain mx-auto" />
                        </div>

                        {/* sign up form  */}
                        <div className="flex flex-col items-center order-1">
                            {/* brand  */}
                            <div className="flex flex-col items-center space-y-4">
                                <img src="../../../assets/logo.png" alt="logo" className="object-contain w-36 cursor-pointer" />
                                <p className="text-center text-gray-600">Sign Up with your email & password</p>
                            </div>

                            {/* signup form  */}
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default SignUp

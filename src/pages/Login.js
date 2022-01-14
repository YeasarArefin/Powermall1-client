import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../components/Login/LoginForm'
import Brand from '../components/Navbar/Brand'

const Login = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login </title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <main className="bg-secondary h-full w-full ">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col py-24 lg:justify-center justify-start">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-content-center">
                        {/* vector image  */}
                        <div className="hidden lg:block">
                            <img src="../../assets/Login-bro.png" alt="login" className=" object-contain mx-auto" />
                        </div>

                        {/* login form  */}
                        <div className="flex flex-col items-center">
                            {/* brand  */}
                            <div className="flex flex-col items-center space-y-4">
                                <Brand />
                                <p className="text-center text-gray-600">Login with your email & password</p>
                            </div>

                            {/* login form  */}
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Login

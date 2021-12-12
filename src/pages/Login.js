import React from 'react'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
    return (
        <main className="bg-secondary h-screen w-full">
            <div className="max-w-screen-xl mx-auto px-6 flex flex-col h-screen lg:justify-center justify-start">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-content-center">
                    {/* vector image  */}
                    <div className="hidden lg:block">
                        <img src="../../assets/Login-bro.png" alt="login" className=" object-contain mx-auto" />
                    </div>

                    {/* login form  */}
                    <div className="flex flex-col items-center">
                        {/* brand  */}
                        <div className="flex flex-col items-center space-y-4">
                            <img src="../../../assets/logo.png" alt="logo" className="object-contain w-36 cursor-pointer" />
                            <p className="text-center text-gray-600">Login with your email & password</p>
                        </div>

                        {/* login form  */}
                        <LoginForm />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login

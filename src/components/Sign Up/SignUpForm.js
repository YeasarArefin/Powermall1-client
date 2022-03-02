import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const { signUpUser, signInWithGoogle } = useAuth()
    const [mobileTrue, setMobileTrue] = useState(false)

    const onSubmit = async (data) => {
        await signUpUser(data.email, data.password, data.name)
    }

    const handleCgn = () => {
        setMobileTrue(!mobileTrue)
    }


    return (
        <div className='my-6 bg-white p-4 py-8 box-border rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className='text-gray-600 text-base'>Name</label>
                        <input className="input" type="text" name="input" id="name" placeholder='John Doe' {...register("name", { required: true })} />
                    </div>
                    {
                        mobileTrue ? (
                            <>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="email" className='text-gray-600 text-base'>Phone Number</label>
                                    <input className="input" type="email" name="input" id="number" placeholder='+8801334556789' {...register("mobile", { required: true })} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="email" className='text-gray-600 text-base'>Email</label>
                                    <input className="input" type="email" name="input" id="email" placeholder='example@gmail.com' {...register("email", { required: true })} />
                                </div>
                            </>
                        )
                    }
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="password" className='text-gray-600 text-base flex justify-between items-center'>
                            <span>Password (At least 6 characters)</span>
                        </label>
                        <input type="password" name="input" id="password" className="input" placeholder='********' {...register("password", { required: true })}/>
                    </div>
                    <div>
                        <p className='text-right text-gray-600 text-sm cursor-pointer' onClick={handleCgn}>
                            {mobileTrue ? "Use Email Instead" : "Use Phone Number Instead"}
                        </p>
                    </div>
                    {/* Sign button  */}
                    <div className='py-4'>
                        <button type="submit" className='py-3 px-4 w-full bg-primary text-white rounded-md  hover:bg-yellow-600 transition duration-300'>Sign Up</button>
                        <p className='text-gray-600 text-center py-4'>Or</p>
                    </div>
                </div>
            </form>


            <div>
                {/* google button  */}
                <button type="submit" className='py-3 px-4 w-full text-gray-600 flex items-center justify-center space-x-3 rounded-md border' onClick={signInWithGoogle}>
                    <FcGoogle className='text-2xl' />
                    <span>Sign In with Google</span>
                </button>

                {/* register  */}
                <div className='mt-6 pt-4 border-t border-gray-200'>
                    <p className='text-center text-gray-600'>Already have any account ? <Link to="/login" className='text-primary font-bold underline cursor-pointer'>Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm

import { Tab } from '@headlessui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import SignUpForm from '../components/Sign Up/SignUpForm';
import SignUpPhoneForm from '../components/Sign Up/SignUpPhoneForm';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SignUp = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SignUp</title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <main className="bg-secondary h-screen  w-full">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col py-24 lg:justify-center justify-start">
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
                            </div>

                            {/* form  */}
                            <div className='mt-6'>
                                <Tab.Group>
                                    <Tab.List className="flex space-x-1 border-b border-gray-300 w-full">
                                        {/* {Object.keys(categories).map((category) => ( */}
                                        <Tab
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-tl-md rounded-tr-md',
                                                    'focus:outline-none',
                                                    selected
                                                        ? 'bg-primary hover:text-white'
                                                        : 'text-gray-500 hover:bg-white/[0.12]'
                                                )
                                            }
                                        >
                                            Sign Up with Email
                                        </Tab>
                                        <Tab
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-tl-md rounded-tr-md',
                                                    'focus:outline-none',
                                                    selected
                                                        ? 'bg-primary hover:text-white'
                                                        : 'text-gray-500 hover:bg-white/[0.12]'
                                                )
                                            }
                                        >
                                            Sign Up with Phone
                                        </Tab>
                                        {/* // ))} */}

                                    </Tab.List>
                                    <Tab.Panels className="mt-2">
                                        <Tab.Panel
                                            className={classNames(
                                                'bg-white rounded-xl p-6',
                                                'focus:outline-none'
                                            )}
                                        >
                                            {/* signup form  */}
                                            <SignUpForm />
                                        </Tab.Panel>
                                        <Tab.Panel
                                            className={classNames(
                                                'bg-white rounded-xl p-6',
                                                'focus:outline-none'
                                            )}
                                        >
                                            {/* signup form  */}
                                            <SignUpPhoneForm />
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>

                        </div>
                    </div>
                </div>
            </main >
        </>

    )
}

export default SignUp

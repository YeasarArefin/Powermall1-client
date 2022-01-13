import { Tab } from '@headlessui/react';
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import Zoom from 'react-reveal/Zoom';
import LoginForm from '../Login/LoginForm';
import SignUpForm from './SignUpForm';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const SignUpModal = ({ setShowSignUp }) => {
    return (
        <div>
            <Zoom>
                <aside className='w-full bg-secondary fixed top-0 right-0 h-full overflow-y-scroll z-50 ' style={{ height: '100%' }}>
                    {/* close button  */}
                    <div className='flex items-center justify-end pt-6 px-8'>
                        <button className='p-3 rounded-full bg-white hover:bg-primary hover:text-white transition duration-500 hover:shadow-xl' onClick={() => setShowSignUp(false)}>
                        <RiCloseLine className="text-xl text-gray-700 hover:text-white" />
                    </button>
                    </div>
                    <div className='flex flex-col items-center justify-center  py-4'>
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 border-b border-gray-300 w-96">
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
                                    Login
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
                                    Signup
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
                                    
                                    <LoginForm />
                                </Tab.Panel>
                                <Tab.Panel
                                    className={classNames(
                                        'bg-white rounded-xl p-6',
                                        'focus:outline-none'
                                    )}
                                >
                                    {/* signup form  */}
                                    <SignUpForm />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </aside>
            </Zoom>
        </div>
    )
}

export default SignUpModal

import React from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { CgMenuLeft } from 'react-icons/cg';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import CartSideBar from '../Product Cart/CartSideBar';
import SignUpModal from '../Sign Up/SignUpModal';
import MenuSidebar from './MenuSidebar';
import ProfileInfo from './ProfileInfo';

const MobileBottomMenu = ({ handleSearchShow, mobileMenu}) => {
    const navigate = useNavigate()
    const [show, setShow] = React.useState(false);
    const [showDropDown, setDropDown] = React.useState(false);
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const { newUser } = useAuth();
    const { cart } = useCart();

    const handleShow = () => {
        setShow(!show);
    }
    const handleShowSignUp = () => {
        setShowSignUp(!showSignUp);
    }

    const handleMenuShow = () => {
        setShowMenu(!showMenu)
    }

    React.useEffect(() => {
        if (newUser?.email) {
            setShowSignUp(false)
            setDropDown(true)
        }
    }, [newUser?.email])

    return (
        <>
            <div className="w-full fixed bottom-0 left-0 bg-white py-4 z-50 border-t border-gray-300">
                <div className="flex items-center justify-around">
                    {/* burger icon  */}
                    <div>
                        <CgMenuLeft className="text-2xl cursor-pointer opacity-80" onClick={handleMenuShow} />
                    </div>

                    {/* search icon  */}
                    <div>
                        <AiOutlineSearch className="text-2xl cursor-pointer opacity-80" onClick={ handleSearchShow}/>
                    </div>

                    {/* home icon  */}
                    <div>
                        <AiOutlineHome className="text-2xl cursor-pointer opacity-80" onClick={() => navigate('/')} />
                    </div>

                    {/* cart icon  */}
                    <div>
                        <div className="relative" onClick={handleShow}>
                            <FiShoppingBag className="text-2xl cursor-pointer opacity-80" onClick={handleShow} />
                            {cart.length > 0 && (
                                <>
                                    <p className="rounded-full w-5 h-5 absolute -top-1 -right-2 bg-primary text-gray-700 flex flex-col justify-center items-center text-center cursor-pointer ">{cart.length}</p>
                                </>
                            )}
                            
                        </div>
                        
                    </div>

                    {/* profile icon  */}
                    <div>
                        {newUser?.email ?  (
                            <ProfileInfo showDropDown={showDropDown} />
                            
                        ) : (
                                <FiUser className="text-2xl cursor-pointer opacity-80" onClick={handleShowSignUp} />
                        ) }
                    </div>

                </div>
            </div>
            {
                show && (
                    <>
                        <CartSideBar setShow={setShow} />
                        <div className='cursor-pointer w-full fixed top-0 left-0 h-screen z-40 bg-gray-800 opacity-70' onClick={() => setShow(false)}>
                        </div>
                    </>
                )
            }
            {
                showSignUp && (
                    <>
                        <SignUpModal setShowSignUp={setShowSignUp} />
                        <div className='cursor-pointer w-full fixed top-0 left-0 h-screen z-40 bg-gray-800 opacity-70' onClick={() => setShowSignUp(false)}>
                        </div>
                    </>
                )
            }
            {
                showMenu && (
                    <>
                        <MenuSidebar setShowMenu={setShowMenu} mobileMenu={mobileMenu} />
                        <div className='cursor-pointer w-full fixed top-0 left-0 h-screen z-40 bg-gray-800 opacity-70' onClick={() => setShowMenu(false)}>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MobileBottomMenu

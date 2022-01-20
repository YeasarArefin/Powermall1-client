import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Brand from './components/Navbar/Brand';
import MobileBottomMenu from './components/Navbar/MobileBottomMenu';
import Navbar from './components/Navbar/Navbar';
import OfferNav from './components/Offer Nav/OfferNav';
import ProductCart from './components/Product Cart/ProductCart';
import Account from './components/Profile/Account';
import EditProfile from './components/Profile/EditProfile';
import OrderDetails from './components/Profile/OrderDetails';
import Orders from './components/Profile/Orders';
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';
import QuantityProvider from './contexts/QuantityProvider';
import AboutUsScreen from './pages/AboutUsScreen';
import Automative from './pages/Automative';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import CookiePolicyScreen from './pages/CookiePolicyScreen';
import DroneService from './pages/DroneService';
import ErrorPage from './pages/ErrorPage';
import FaqScreen from './pages/FaqScreen';
import FreeShipping from './pages/FreeShipping';
import GlobalPurchase from './pages/GlobalPurchase';
import HelpScreen from './pages/HelpScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import OrderSuccessful from './pages/OrderSuccessful';
import PaymentMethodScreen from './pages/PaymentMethodScreen';
import PrivacyScreen from './pages/PrivacyScreen';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import ReturnRefundScreen from './pages/ReturnRefundScreen';
import ShippingDeliveryScreen from './pages/ShippingDeliveryScreen';
import Shops from './pages/Shops';
import ShopWithUsScreen from './pages/ShopWithUsScreen';
import SignUp from './pages/SignUp';
import SitemapScreen from './pages/SitemapScreen';
import TermsScreen from './pages/TermsScreen';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const [header, setHeader] = useState(false)
  const [loading,setLoading] = useState(true)
  const [showOffer,setShowOffer] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const handleSearchShow = () => {
    setSearchShow(!searchShow)
  }
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader)


  //tablet mode 
  const changeNav = () => {
    if (window.innerWidth < 1140) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', changeNav);
  }, [])

  //loading 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  return (
  //   <>
  //     <h1 className="text-5xl text-center">404 Not Found !!!</h1>

  //   </>
  // )
    loading ? (
      <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
        <Brand />
        <BarLoader color="#fc3c3c" loading={loading} size={150} width={300} />
      </div>
    ) : (
      <>
          <AuthProvider>
            <CartProvider>
              <QuantityProvider>
                <ProductCart />
                <div>
                  {showOffer && <OfferNav setShowOffer={setShowOffer} />}
                  <div className={`${header && "fixed top-0 w-full z-30 transition duration-300"} `}>
                    <Navbar searchShow={searchShow} mobileMenu={mobileMenu} setSearchShow={setSearchShow} />
                  </div>
                  {mobileMenu && <MobileBottomMenu setSearchShow={setSearchShow} handleSearchShow={handleSearchShow} />}
                  
                </div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/shops" element={<Shops />} />
                  <Route path="/free" element={<FreeShipping />} />
                  <Route path="/droneservice" element={<DroneService />} />
                  <Route path="/globalpurchase" element={<GlobalPurchase />} />
                  <Route path="/automative" element={<Automative />} />
                  <Route path="/about" element={<AboutUsScreen />} />
                  <Route path="/privacy" element={<PrivacyScreen />} />
                  <Route path="/cookiePolicy" element={<CookiePolicyScreen />} />
                  <Route path="/shopwithus" element={<ShopWithUsScreen />} />
                  <Route path="/terms" element={<TermsScreen />} />
                  <Route path="/help" element={<HelpScreen />} />
                  <Route path="/faq" element={<FaqScreen />} />
                  <Route path="/shippingdelivery" element={<ShippingDeliveryScreen />} />
                  <Route path="/returnrefund" element={<ReturnRefundScreen />} />
                  <Route path="/paymentmethod" element={<PaymentMethodScreen />} />
                  <Route path="/sitemap" element={<SitemapScreen />} />
                  <Route path="/order-successful" element={<PrivateRoute><OrderSuccessful /></PrivateRoute>} />
                  <Route path="/shops/:id" element={<ProductDetails />} />
                  <Route path="/profile/*" element={<PrivateRoute><Profile /></PrivateRoute>}>
                    <Route path="*" element={<PrivateRoute><Account /></PrivateRoute>} />
                    <Route path="account" element={<PrivateRoute><Account /></PrivateRoute>} />
                    <Route path="edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
                    <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
                    <Route path="orders/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
                  </Route>
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </QuantityProvider>
            </CartProvider>
          </AuthProvider>
      </>
    )
    
  )
}

export default App

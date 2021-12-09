import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BigBanner from '../components/Big Sale/BigBanner'
import Features from '../components/Features/Features'
import Navbar from '../components/Navbar/Navbar'
import ProductCart from '../components/Product Cart/ProductCart'
import AcCategory from '../components/Products/AcCategory'
import MobileCategory from '../components/Products/MobileCategory'
import Slider from '../components/Slider/Slider'
import SubNav from '../components/SubNavbar/SubNav'

const Home = () => {
    const [header, setHeader] = useState(false)

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeHeader)
    return (
        <>
            <div className={`${header && "fixed top-0 w-full z-50 transition duration-300"} `}>
                <Navbar />
                <SubNav />
            </div>
            <Slider />
            <ProductCart />
            <main className="max-w-screen-xl mx-auto px-6">
                <Features />
                <MobileCategory />
                <BigBanner />
                <AcCategory />
                <BigBanner />
                <ToastContainer />
            </main>
        </>
    )
}

export default Home

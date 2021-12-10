import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BigBanner from '../components/Big Sale/BigBanner'
import Brands from '../components/Brands/Brands'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import PopularCategories from '../components/Popular Categories/PopularCategories'
import ProductCart from '../components/Product Cart/ProductCart'
import AcCategory from '../components/Products/AcCategory'
import MobileCategory from '../components/Products/MobileCategory'
import Recommended from '../components/Recommended/Recommended'
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
            <div className={`${header && "fixed top-0 w-full z-40 transition duration-300"} `}>
                <Navbar />
                <SubNav />
            </div>
            <Slider />
            <ProductCart />
            <main className="max-w-screen-xl mx-auto px-6" style={{ background:'#F4F4FA',height:'100%'}}>
                <Features />
                <MobileCategory />
                <BigBanner />
                <AcCategory />
                <BigBanner />
                <Recommended />
                <Brands />
                <PopularCategories />
                <ToastContainer />
            </main>
            <Footer />
        </>
    )
}

export default Home

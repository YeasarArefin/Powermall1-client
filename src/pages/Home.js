import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BigBanner from '../components/Big Sale/BigBanner'
import Brands from '../components/Brands/Brands'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import PopularCategories from '../components/Popular Categories/PopularCategories'
import AcCategory from '../components/Products/AcCategory'
import MobileCategory from '../components/Products/MobileCategory'
import Recommended from '../components/Recommended/Recommended'
import Slider from '../components/Slider/Slider'

const Home = () => {
    return (
        <>
            <Slider />
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

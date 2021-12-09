import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BigBanner from '../components/Big Sale/BigBanner'
import Features from '../components/Features/Features'
import Navbar from '../components/Navbar/Navbar'
import AcCategory from '../components/Products/AcCategory'
import MobileCategory from '../components/Products/MobileCategory'
import Slider from '../components/Slider/Slider'
import SubNav from '../components/SubNavbar/SubNav'

const Home = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <Slider />
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

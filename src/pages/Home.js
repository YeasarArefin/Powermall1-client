import React from 'react'
import { Helmet } from "react-helmet"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BigBanner from '../components/Big Sale/BigBanner'
import BigBanner2 from '../components/Big Sale/BigBanner2'
import Brands from '../components/Brands/Brands'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import PopularCategories from '../components/Popular Categories/PopularCategories'
// import AcCategory from '../components/Products/AcCategory'
// import MobileCategory from '../components/Products/MobileCategory'
import ProductsCategory from '../components/Products/ProductsCategory'
import Recommended from '../components/Recommended/Recommended'
import Slider from '../components/Slider/Slider'

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home : Electro Shop</title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <Slider />
            <main className="max-w-screen-xl mx-auto px-6" style={{ background:'#F4F4FA',height:'100%'}}>
                <Features />
                {/* <MobileCategory /> */}
                <BigBanner />
                <ProductsCategory />
                {/* <AcCategory /> */}
                <BigBanner2 />
                <Recommended />
                <Brands />
                <PopularCategories />
                <ToastContainer />
            </main>
            <Footer />
        </div>
    )
}

export default Home

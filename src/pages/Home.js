import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BigBanner from '../components/Big Sale/BigBanner';
import BigBanner2 from '../components/Big Sale/BigBanner2';
import Brands from '../components/Brands/Brands';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import PopularCategories from '../components/Popular Categories/PopularCategories';
import ProductsCategory from '../components/Products/ProductsCategory';
import Recommended from '../components/Recommended/Recommended';
import Slider from '../components/Slider/Slider';

const Home = () => {
    const [metaTag, setMetaTag] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/seo')
            .then(res => setMetaTag(res?.data?.[0]));
    }, []);


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content={metaTag?.description}
                />
                <meta content={metaTag?.ogTitle} property="og:title" />

                <meta property="og:image" content={metaTag?.img} />

                <link rel="canonical" href={metaTag?.url} />

                <title>{metaTag?.title}</title>

            </Helmet>
            <main className="max-w-screen-xl mx-auto px-6" style={{ background: '#F4F4FA', height: '100%' }}>
                <div className='mt-6'>
                    <Slider />
                </div>
                <Features />
                <BigBanner />
                <ProductsCategory />
                <BigBanner2 />
                <Brands />
                <Recommended />
                <PopularCategories />
                <ToastContainer />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

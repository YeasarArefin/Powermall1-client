import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Brands from '../components/Brands/Brands';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import MenuBox from '../components/Menu Box/MenuBox';
import NoticeText from '../components/Notice Text/NoticeText';
import PopularCategories from '../components/Popular Categories/PopularCategories';
import ProductsCategory from '../components/Products/ProductsCategory';
import Recommended from '../components/Recommended/Recommended';
import Slider from '../components/Slider/Slider';

const Home = () => {
    const [metaTag, setMetaTag] = useState([]);
    const [notice, setNotice] = React.useState([]);

    // const [mobileVersion, setMobileVersion] = useState(false)

    useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/seo')
            .then(res => setMetaTag(res?.data?.[0]));
    }, []);


    React.useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/notice')
            .then(res => setNotice(res?.data?.[0]))
    }, [])

    // const changeNav = () => {
    //     if (window.innerWidth < 900) {
    //         setMobileVersion(true);
    //     } else {
    //         setMobileVersion(false);

    //     }
    // };

    // window.addEventListener('resize', changeNav);

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
            <main style={{ background: '#F4F4FA', height: '100%' }}>
                {/* {mobileVersion && (
                    <>
                        <div className=''>
                            <Slider mobileVersion={mobileVersion}/>
                        </div>
                    </>
                )} */}
                <div className="max-w-screen-xl mx-auto px-6" >
                    {/* {!mobileVersion && ( */}
                        {/* <> */}
                            <div className='pt-6'>
                                <Slider />
                            </div>
                        {/* </> */}
                    {/* // )} */}
                    {
                        notice?.status === "On" && (
                            <NoticeText notice={notice} />
                        )
                    }
                    <MenuBox />
                    <Features />
                    {/* <BigBanner /> */}
                    <ProductsCategory />
                    {/* <BigBanner2 /> */}
                    <Brands />
                    <Recommended />
                    <PopularCategories />
                    <ToastContainer />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;

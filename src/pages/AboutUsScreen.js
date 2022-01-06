import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';

const AboutUsScreen = () => {
    const [item,setItem] = useState([])
    
    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/aboutus')
        .then(res => setItem(res.data[0]))
    }, [])

    return (
        <div>
            {/* <PageTitle title="About US" /> */}
            <div className="preview my-8 max-w-screen-xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: item?.html }}></div>
            <Footer />
        </div>
    )
}

export default AboutUsScreen

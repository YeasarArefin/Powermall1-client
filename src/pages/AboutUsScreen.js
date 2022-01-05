import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AboutUsScreen = () => {
    const [item,setItem] = useState([])
    
    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/aboutus')
        .then(res => setItem(res.data[0]))
    }, [])

    return (
        <div>
            {/* <PageTitle title="About US" /> */}
            <div className="preview mt-5 max-w-screen-xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: item?.html }}></div>
        </div>
    )
}

export default AboutUsScreen

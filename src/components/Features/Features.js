import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const Features = () => {
    const [featuresData, setFeatureData] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/feature')
            .then(res => setFeatureData(res?.data))
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
            {featuresData?.map(feature => (
                <Slide bottom key={feature?._id}>
                    <div className="rounded-lg hover:shadow-xl transform hover:translate-y-4 overflow-hidden h-52 transition duration-500" style={{ background: `url(${feature?.img})` }}>
                        <div className="flex flex-col justify-center space-y-1 h-full p-6">
                            {/* text  */}
                            <div>
                                <h3 className="text-2xl font-bold text-white">{feature?.title}</h3>
                                <p className="text-sm text-white mb-2">{feature?.details}</p>
                            </div>

                            {/* button  */}
                            <div>
                                <a href={`${feature?.link}`} target="_blank" rel="noopener noreferrer">
                                <button className={`bg-white w-28 px-3 py-2 mt-2 rounded-full text-gray-600 hover:scale-110 transform transition duration-300 text-sm`}  >{feature?.name}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slide>
            ))}
        </div>
    )
}

export default Features

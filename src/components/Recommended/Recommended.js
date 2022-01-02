import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import SectionTitle from '../Section Title/SectionTitle';

const Recommended = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/recomendedbanner')
            .then(res => setImages(res.data));
    }, [images]);

    return (
        <>
            <section className="py-6">
                {/* title  */}
                <SectionTitle title="Recommended" />

                {/* cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
                    {images.map((image) => (
                        <Slide bottom key={image?._id}>
                            <div className="col-span-1">
                                <div className="flex flex-col items-center overflow-hidden rounded-lg">
                                    <a href={image?.link} target='_blank' rel='noreferrer'>
                                        <img src={image?.img} alt="recommended" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-500" />
                                    </a>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Recommended;

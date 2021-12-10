import React from 'react';
import Slide from 'react-reveal/Slide';
import SectionTitle from '../Section Title/SectionTitle';

const Recommended = () => {
    const images = [
        {id : 1, image : '../../../assets/recommended1.jpg' },
        {id : 2, image : '../../../assets/recommended2.jpg' },
        {id : 3, image : '../../../assets/recommended3.jpg' },
    ]
    return (
        <>
            <section className="py-6">
                {/* title  */}
                <SectionTitle title="Recommended" />

                {/* cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
                    {images.map(image => (
                        <Slide bottom key={image.id}>
                        <div className="col-span-1">
                            <div className="flex flex-col items-center overflow-hidden rounded-lg">
                                <img src={image.image} alt="recommended" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-500" />
                            </div>
                        </div>
                        </Slide>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Recommended

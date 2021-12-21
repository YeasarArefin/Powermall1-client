import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import SectionTitle from '../Section Title/SectionTitle';

const PopularCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/category')
            .then(res => setCategories(res.data))
    }, [])


    return (
        <>
            <section className="py-6">
                <SectionTitle title="POPULAR CATEGORIES" />

                {/* categories  */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 py-8">
                    {categories?.map(item => (
                        <Slide bottom key={item._id}>
                            <div className='bg-white rounded-lg p-3 box-border shadow-xl flex flex-col items-center justify-center h-full space-y-2 hover:scale-105 transform transition duration-500 cursor-pointer'>
                                <img className="w-16 object-contain" src={item.img} alt={item.category} />
                                <p className="text-gray-600">{item.category}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PopularCategories

import React from 'react';
import Slide from 'react-reveal/Slide';
import SectionTitle from '../Section Title/SectionTitle';

const PopularCategories = () => {
    const categories = [
        { id: 1, name: 'Mobile', image: '../../../assets/categories/smartphone.png' },
        { id: 1, name: 'Laptop', image: '../../../assets/categories/laptop.png' },
        { id: 1, name: 'Headphone', image: '../../../assets/categories/headphones.png' },
        { id: 1, name: 'Camera', image: '../../../assets/categories/camera.png' },
        { id: 1, name: 'AC', image: '../../../assets/categories/ac.png' },
        { id: 1, name: 'Keyboard', image: '../../../assets/categories/keyboard.png' },
        { id: 1, name: 'Printer', image: '../../../assets/categories/printer.png' },
        { id: 1, name: 'Pendrive', image: '../../../assets/categories/pendrive.png' },
    ]

    return (
        <>
            <section className="py-6">
                <SectionTitle title="POPULAR CATEGORIES" />

                {/* categories  */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-10 py-8">
                    {categories?.map(item => (
                        <Slide bottom key={item.id}>
                            <div className='bg-white rounded-lg p-3 box-border shadow-xl flex flex-col items-center justify-center h-full space-y-2 hover:scale-105 transform transition duration-500 cursor-pointer'>
                                <img className="w-16 object-contain" src={item.image} alt={item.name} />
                                <p className="text-gray-600">{item.name}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PopularCategories

import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SectionTitle = ({ title, slug }) => {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className='flex items-center justify-between'>
            <h1 className="text-gray-700 text-left py-3 capitalize text-xl font-semibold ">{title}</h1>
            <Link to={`/shops?categories=${slug}`} onClick={() => {
                setSearchParams({ categories: slug })
            }}>
                <button className='bg-primary  hover:bg-yellow-600 text-white focus:outline-none rounded-md transition duration-300 px-4 py-2 text-sm'>See All</button>
            </Link>
        </div>
    )

};

export default SectionTitle;

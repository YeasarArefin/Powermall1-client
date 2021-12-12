import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductInformations = (props) => {
    const { rating, ratings } = props;


    let [categories] = useState({
        Details: [
            {
                id: 1,
                title: 'Samsung Galaxy Z Fold3',
                data: [
                    { id: 1, name: "OS: Android 10" },
                    { id: 2, name: "Chipset: Qualcomm Snapdragon 888 5G (5 nm)" },
                    { id: 3, name: "RAM: 12GB" },
                    { id: 4, name: "RAM: 12GB" },
                    { id: 5, name: "ROM: 256GB Internal Storage (UFS 3.1)" },
                ]
            }
        ],
        "More Information": [
            {
                id: 1,
                title: 'Ac Galdgsdgdsgs',
                data: [
                    { id: 1, name: "OS: Android 10" },
                    { id: 2, name: "Chipset: Qualcomm Snapdragon 888 5G (5 nm)" },
                    { id: 3, name: "RAM: 12GB" },
                    { id: 4, name: "RAM: 12GB" },
                    { id: 5, name: "ROM: 256GB Internal Storage (UFS 3.1)" },
                ]
            },
            {
                id: 2,
                title: 'Samsung Galaxy Z Fold3',
                data: [
                    { id: 1, name: "OS: Android 10" },
                    { id: 2, name: "Chipset: Qualcomm Snapdragon 888 5G (5 nm)" },
                    { id: 3, name: "RAM: 12GB" },
                    { id: 4, name: "RAM: 12GB" },
                    { id: 5, name: "ROM: 256GB Internal Storage (UFS 3.1)" },
                ]
            }
        ],
    })

    return (
        <div className="w-full p-6">
            <Tab.Group>
                <Tab.List className="flex space-x-1 border-b border-gray-300 w-full">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-tl-md rounded-tr-md',
                                    'focus:outline-none',
                                    selected
                                        ? 'bg-primary hover:text-white'
                                        : 'text-gray-500 hover:bg-white/[0.12]'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-tl-md rounded-tr-md',
                                'focus:outline-none',
                                selected
                                    ? 'bg-primary hover:text-white'
                                    : 'text-gray-500 hover:bg-white/[0.12]'
                            )
                        }>Reviews</Tab>

                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'bg-white rounded-xl p-6',
                                'focus:outline-none'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>
                                        <ul className="flex flex-col space-y-2 mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                            {post?.data?.map(item => (
                                                <>
                                                    <li key={item?.id}>{item?.name}</li>
                                                </>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}

                    {/* reviews panel */}
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-6',
                            'focus:outline-none'
                        )}>
                        <h1 className='text-gray-700 text-2xl'>Customer Reviews</h1>

                        {/* ratings  */}
                        <div className='py-4 flex flex-col space-y-3'>
                            <h1 className='text-5xl text-gray-800 font-bold'>{rating}<span className='text-3xl text-gray-500'>/5</span></h1>
                            <div className="flex flex-col space-y-1">
                                <Rating
                                    emptySymbol={<AiOutlineStar className="text-gray-600 text-3xl" />}
                                    fullSymbol={<AiFillStar className="text-yellow-400 text-3xl" />}
                                    initialRating={`${rating}`}
                                    readonly
                                    className='mt-2'
                                />
                                <span className="text-gray-600">({ratings} ratings)</span>
                            </div>
                        </div>
                    </Tab.Panel>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ProductInformations

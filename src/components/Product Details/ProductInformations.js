import { Tab } from '@headlessui/react';
import React, { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductInformations = (props) => {
    const { description, moreInformation } = props;

    const desc = `${description}`
    const info = `${moreInformation}`

    console.log(description)
    let [categories] = useState({
        "Details": [
            {
                id: 1,
                data: desc
            }
        ],
        "More Information": [
            {
                id: 1,
                data: info
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

                </Tab.List>
                <Tab.Panels className="mt-2">
                    {/* {Object.values(categories).map((posts, idx) => ( */}
                    <Tab.Panel
                        // key={idx}
                        className={classNames(
                            'bg-white rounded-xl p-6',
                            'focus:outline-none'
                        )}
                    >
                        <div

                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                        >
                            <div className="flex flex-col space-y-2 mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                <p>{description}</p>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel
                        // key={idx}
                        className={classNames(
                            'bg-white rounded-xl p-6',
                            'focus:outline-none'
                        )}
                    >
                        <div

                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                        >
                            <div className="flex flex-col space-y-2 mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                <p>{moreInformation}</p>
                            </div>
                        </div>
                    </Tab.Panel>
                    {/* ))} */}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ProductInformations

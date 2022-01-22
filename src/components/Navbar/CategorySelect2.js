import {
    ControlledMenu, MenuItem, SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { HiSelector } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';



const CategorySelect2 = ({ mobileMenu }) => {
    const [categories, setCategories] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef(null);
    const [state, setState] = useState();
    const [categoryFilter, setCategoryFilter] = React.useState();

    React.useEffect(() => {
        setCategoryFilter(searchParams.get("categories"))
    }, [searchParams])

    useEffect(() => {
        axios.get('https://elec-shop-server.herokuapp.com/category')
            .then(res => {
                const newData = res?.data?.sort((a, b) => a?.position - b?.position);
                setCategories(newData)
            })
    }, [])


    return (
        <div>

            <div ref={ref} onMouseEnter={() => setState('open')} className='border-2 text-primary text-sm w-36 py-3 px-4 rounded-lg border-primary font-semibold flex items-center justify-between cursor-pointer'>
                <span className="text-sm">{categoryFilter ? categoryFilter.toUpperCase() : "CATEGORIES"}</span>
                <HiSelector
                    className="w-5 h-5 text-primary font-bold"
                />
            </div>
            <ControlledMenu state={state} anchorRef={ref}
                onMouseLeave={() => setState('closed')}
                onClose={() => setState('closed')}>
                {categories?.map((item, inx) => (
                    <>
                        <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                            setSearchParams({ categories: item?.slug })
                            // setShowMenu(false)

                        }}
                        >
                            {!item?.subCategory && (
                                <>
                                    <MenuItem className="text-sm">{item?.category}</MenuItem>
                                </>
                            )}

                        </Link>

                        {item?.subCategory && (
                            <>
                                <SubMenu label={item?.category} >
                                    <Link to={`/shops?categories=${item?.slug}`} onClick={() => {
                                        setSearchParams({ categories: item?.slug })
                                        // setShowMenu(false)

                                    }}>
                                        <MenuItem>ALL</MenuItem>
                                    </Link>
                                    {item?.subCategory?.map((cate) => (
                                        <>
                                            
                                            
                                            <Link to={`/shops?categories=${cate?.toLowerCase()}`} onClick={() => {
                                                setSearchParams({ categories: cate?.toLowerCase() })
                                                // setShowMenu(false)

                                            }}>
                                                <MenuItem>{cate}</MenuItem>
                                            </Link>
                                        </>
                                    ))}
                                </SubMenu>
                            </>
                        )}






                    </>
                ))}

            </ControlledMenu>

        </div>
    )
}

export default CategorySelect2

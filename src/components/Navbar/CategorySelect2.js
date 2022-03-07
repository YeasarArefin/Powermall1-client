import {
    ControlledMenu, MenuItem, SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
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
        axios.get('https://powermallapi.herokuapp.com/category')
            .then(res => {
                const newData = res?.data?.sort((a, b) => a?.position - b?.position);
                setCategories(newData)
            })
    }, [])


    return (
        <div>

            <div ref={ref} onMouseEnter={() => setState('open')} className='border text-primary text-xs w-36 py-3 px-4 rounded-lg border-primary font-semibold flex items-center space-x-2 cursor-pointer'>
                <AiOutlineMenu
                    className="w-5 h-5 text-primary font-bold"
                />
                <span className="text-xs">{categoryFilter ? categoryFilter.toUpperCase() : "CATEGORIES"}</span>
            </div>
            <ControlledMenu state={state} anchorRef={ref}
                onMouseLeave={() => setState('closed')}
                onClose={() => setState('closed')}>
                    {categories?.map((item, inx) => (
                        <>
                            <Link to={`/shops?categories=${item?.slug}`} key={item?.slug} onClick={() => {
                                setSearchParams({ categories: item?.slug })
                            }}
                                
                            >
                                {!item?.subCategory && (
                                    <>
                                        <MenuItem className={`text-xs w-48 `}>{item?.category}</MenuItem>
                                    </>
                                )}

                            </Link>

                            {item?.subCategory && (
                                <>
                                    <SubMenu label={item?.category} className={`text-xs w-48 `} >
                                        <Link to={`/shops?categories=${item?.slug}`} key={item?.slug} onClick={() => {
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

                                                }} key={cate}>
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

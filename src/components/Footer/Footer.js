import React from 'react'
import UpArrow from '../Up Arrow/UpArrow'
import MainFooter from './MainFooter'
import SubFooter from './SubFooter'

const Footer = () => {
    return (
        <footer className='bg-white w-full relative'>
            <MainFooter />
            <SubFooter />
            <UpArrow />
        </footer>
    )
}

export default Footer

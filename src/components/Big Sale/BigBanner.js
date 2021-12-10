import React from 'react';
import Slide from 'react-reveal/Slide';

const BigBanner = () => {
    return (
        <Slide bottom>
        <section style={{
             background: `url(https://image.freepik.com/free-vector/cartoon-black-friday-background_52683-77697.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',


            }} 
            className="h-72 mb-8 rounded-lg">
        </section>
        </Slide>
    )
}

export default BigBanner

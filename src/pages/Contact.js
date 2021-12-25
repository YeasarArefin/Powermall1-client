import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/Contact/ContactForm'
import ContactMap from '../components/Contact/ContactMap'
import Footer from '../components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="https://electro-shop-client.vercel.app/" />
            </Helmet>
            <main className="bg-secondary h-screen w-full">
                <section className='max-w-screen-xl mx-auto px-6 flex flex-col h-screen justify-center'>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='hidden lg:block'>
                            <ContactMap />
                        </div>
                        <div className='order-1 lg:order-2'>
                            <ContactForm />
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Contact

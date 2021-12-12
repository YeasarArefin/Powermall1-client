import React from 'react';
import ShippingForm from '../components/Checkout/ShippingForm';
import Footer from '../components/Footer/Footer';

const Checkout = () => {
    return (
        <>
            <main className="max-w-screen-xl mx-auto">
                <section className='mx-6 mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* shipping address  */}
                    <div className='col-span-2  rounded-lg bg-white  p-6 box-border'>
                        <h1 className='text-gray-600 text-lg font-semibold'>Delivery Information</h1>
                        <ShippingForm />
                    </div>

                    {/* order summary  */}
                    <div className="bg-white p-4 rounded-lg box-border">
                        <h1 className='text-gray-600 text-lg font-semibold'>Order Summary</h1>
                    </div>
                </section>

                {/* products cart  */}
                <section className='mx-6  bg-white rounded-lg my-12'>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Checkout

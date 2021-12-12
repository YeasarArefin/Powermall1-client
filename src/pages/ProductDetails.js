import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import DeliveryDescription from '../components/Product Details/DeliveryDescription';
import ProductDescription from '../components/Product Details/ProductDescription';
import ProductImage from '../components/Product Details/ProductImage';
import ProductInformations from '../components/Product Details/ProductInformations';

const ProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.find(product => product?.id === parseInt(id));

    return (
        <>
            <main className="max-w-screen-xl mx-auto">
                <section className='mx-6  bg-white rounded-lg mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>
                    {/* image  */}
                    <div className='col-span-1  p-6 box-border'>
                        <ProductImage {...product} />
                        {/* <img src={product?.image} alt={product?.name} className="w-full " /> */}
                    </div>

                    {/* product description  */}
                    <div className="col-span-2  p-6 box-border">
                        <ProductDescription {...product} />
                    </div>

                    {/* order description  */}
                    <div className="col-span-1">
                        <DeliveryDescription {...product} />
                    </div>
                </section>

                {/* product information  */}
                <section className='mx-6  bg-white rounded-lg my-12'>
                    <ProductInformations {...product} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ProductDetails

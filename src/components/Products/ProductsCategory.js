// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import useFetch from '../../hooks/useFetch';

// const ProductsCategory = () => {
//     const [categories, setCategories] = useState([])
//     const [products] = useFetch()

//     useEffect(() => {
//         axios.get('https://electro-comers-server.herokuapp.com/category')
//             .then(res => setCategories(res.data))
//     }, [])

//     const allPd = products?.map(item => item?.category)
//     const allCg = categories?.map(item => item)

//      categories?.map(item => console.log(item))
//     // const categoryMap =
//     return (
//         <div>
//             {
//                 categories?.map(item => {
//                     if (item?.category?.toLowerCase()?.includes(products?.map(item => item?.category?.toLowerCase()))){
//                         return (
//                             <div>
//                                 <h1>{item?.category}</h1>
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     )
// }

// export default ProductsCategory

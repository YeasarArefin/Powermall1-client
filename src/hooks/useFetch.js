import React, { useEffect } from 'react'

const useFetch = () => {
    const [products,setProducts] = React.useState([])

    useEffect(() => {
        fetch('https://api.powermall.com.bd/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
}

export default useFetch

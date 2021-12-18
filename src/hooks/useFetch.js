import React, { useEffect } from 'react'

const useFetch = () => {
    const [products,setProducts] = React.useState([])

    useEffect(() => {
        fetch('https://electro-comers-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
}

export default useFetch

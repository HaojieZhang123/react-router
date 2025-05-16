import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetail = () => {

    // get the id from the url
    const { id } = useParams()

    // state to hold the product data
    const [product, setProduct] = useState({})

    // function to fetch the product data
    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error('Error fetching product:', error)
            })
    }

    // useEffect to fetch the product data when the component mounts
    // and when the id changes
    useEffect(() => {
        fetchProduct()
    }, [id])

    return (
        <h1>Product Detail #{id}</h1>
    )
}

export default ProductDetail
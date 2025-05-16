import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetail = () => {

    // get the id from the url
    const { id } = useParams()

    // state to hold the product data
    const [singleProduct, setSingleProduct] = useState('')

    // function to fetch the product data
    const fetchSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setSingleProduct(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching product:', error)
            })
    }

    // useEffect to fetch the product data when the component mounts
    // and when the id changes
    useEffect(() => {
        fetchSingleProduct()
    }, [id])

    return (
        <>
            <h1>Product Detail #{id}</h1>

            <div className="product-detail-container">
                <img src={singleProduct.image} alt={singleProduct.title} className="product-detail-image" />
                <div className="product-detail-info">
                    <h3 className="product-detail-title">{singleProduct.title}</h3>
                    <p className="product-detail-category">{singleProduct.category}</p>
                    <p className="product-detail-description">{singleProduct.description}</p>
                    <p className="product-detail-price">{`$ ${singleProduct.price}`}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
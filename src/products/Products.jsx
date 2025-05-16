import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.error('Error fetching products:', error)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Products</h1>

            <div className="products-container">

                {/* loading when the data is being fetched */}
                {products.length === 0 && (
                    <div className="loading">
                        <p>Loading...</p>
                    </div>
                )}

                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">{`$ ${product.price.toFixed(2)}`}</p>
                            <NavLink to={`/products/${product.id}`} className="product-button">
                                View Details
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
            <Navbar />
            <h1>Products</h1>

            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
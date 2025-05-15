import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link className='navbar-link' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='navbar-link' to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className='navbar-link' to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
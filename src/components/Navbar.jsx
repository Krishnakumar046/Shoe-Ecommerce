import React, { useContext, useState } from 'react';
import { cartContent } from './Usecontext';
import { Link } from 'react-router-dom';
import data from "../Json/data.json";

function Navbar() {
    const { cart } = useContext(cartContent);
    const [datas] = useState(data);
    const length = cart.length;

    return (
        <nav className="navbar navbar-expand bg-secondary navbar-dark ">
            <div className="container-fluid">
                {/* Brand Logo */}
                <Link to="/" className="navbar-brand text-white fw-bold">
                    Product-Store
                </Link>

                {/* Navbar Items */}
                <ul className="navbar-nav d-flex flex-row gap-3 me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product" className="nav-link text-white">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-white">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="btn btn-success">
                    Cart ({length})
                </Link>
            </div>
        </nav >
    );
}

export default Navbar;

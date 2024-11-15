import React, { useContext } from 'react';
import { cartContent } from './Usecontext';
import { Link } from 'react-router-dom';

function Cartproduct() {
    const { cart, dispatch } = useContext(cartContent);

    const handleDelete = (item) => {
        dispatch({ type: 'DELETE', payload: item });
    };

    const getQuantity = (itemId) => {
        const cartItem = cart.find(cartItem => cartItem.id === itemId);
        return cartItem ? cartItem.quantity : 0;
    };

    const handleIncrement = (item) => {
        dispatch({ type: "INCREMENT", payload: item });
    };

    const handleDecrement = (item) => {
        dispatch({ type: "DECREMENT", payload: item });
    };

    return (
        <div className="container mt-4">
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <div
                        key={index}
                        className="row align-items-center mb-4 p-2 shadow-sm border rounded"
                    >
                        <div className="col-md-3 d-flex justify-content-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="img-fluid rounded"
                                style={{ maxWidth: "300px", maxHeight: "150px" }}
                            />
                        </div>

                        <div className="col-md-5">
                            <h5 className="mb-2">{item.name}</h5>
                            <p className="text-muted">{item.description}</p>
                            <p className="text-muted">Price: ${item.price}</p>
                        </div>

                        <div className="col-md-2 d-flex justify-content-center">
                            <div className="btn-group">
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handleIncrement(item)}
                                >
                                    <b>+</b>
                                </button>
                                <button className="btn btn-light btn-sm" disabled>
                                    {getQuantity(item.id)}
                                </button>
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handleDecrement(item)}
                                >
                                    <b>-</b>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-2 d-flex justify-content-center">
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                    <h2 className="text-muted">Your Cart is Empty</h2>
                    <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/product" className="btn btn-primary mt-3">
                        Browse Products
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cartproduct;

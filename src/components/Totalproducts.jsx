import React, { useContext, useState } from 'react'
import data from "../Json/datathree.json"
import { cartContent } from './Usecontext';


function Totalproducts() {
    const [product, setProducts] = useState(data);
    const { cart, dispatch } = useContext(cartContent);

    const handleClick = (item) => {
        dispatch({ type: "ADD", payload: item });
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
        <div className="container-fluid p-4">
            <div className="row g-4 justify-content-center">
                {product.map((item, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                        <div
                            className="card h-100 shadow-lg border-0 rounded"
                            style={{ width: "100%", maxWidth: "30rem" }}
                        >
                            <div className="d-flex justify-content-center align-items-center p-3">
                                <img
                                    src={item.image}
                                    className="card-img-top rounded"
                                    alt={item.name}
                                    style={{
                                        width: "100%",
                                        maxHeight: "300px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <ul>
                                    <li>
                                        <p className="card-text text-muted">{item.description}</p>
                                    </li>
                                    <li>
                                        <p className="card-text text-muted">Price: ${item.price}</p>
                                    </li>
                                </ul>

                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <div className="btn-group btn-group-sm">
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={() => handleDecrement(item)}
                                        >
                                            <b>-</b>
                                        </button>
                                        <button className="btn btn-light" disabled>
                                            {getQuantity(item.id)}
                                        </button>
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={() => handleIncrement(item)}
                                        >
                                            <b>+</b>
                                        </button>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={() => handleClick(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Totalproducts
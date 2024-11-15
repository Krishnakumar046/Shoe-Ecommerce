const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (state.cart.some(product => product.id === action.payload.id)) {

                alert("the product is in cart")
                return state;


            } else {
                return {

                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        case "DELETE":
            // let index = state.cart.indexOf(action.payload.id);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: (item.quantity || 0) + 1 } // increment quantity
                        : item
                )
            };
        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: (item.quantity || 0) - 1 } // increment quantity
                        : item
                )
            };
        default:
            return state
    }
}

export default cartReducer;
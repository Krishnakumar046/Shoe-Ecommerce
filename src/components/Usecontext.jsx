import React, { Children, createContext, useReducer } from 'react'
import cartReducer from './Usereducer';


export const cartContent = createContext();

function Usecontext({ children }) {

    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const { cart } = state;
    return (
        <cartContent.Provider value={{ cart, dispatch }}>
            {children}
        </cartContent.Provider>
    )
}

export default Usecontext
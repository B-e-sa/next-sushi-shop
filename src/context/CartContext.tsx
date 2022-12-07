import { createContext, useState } from "react"

interface IChildren {
    children: JSX.Element
}

const CartContext = createContext({})

const CartProvider = ({ children }: IChildren): JSX.Element => {
    const [cartContext, setCartContext] = useState([])
    return (
        <CartContext.Provider value={{ cartContext, setCartContext }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
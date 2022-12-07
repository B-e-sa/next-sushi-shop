import { createContext, Dispatch, SetStateAction, useState } from 'react'
import IProducts from '../interfaces/IProducts'

interface IChildren {
    children: JSX.Element
};

interface ICartContext {
    getIemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
};

interface IValues {
    cartContext: never[]
    setCartContext: Dispatch<SetStateAction<never[]>>
};

export const CartContext = createContext({} as IValues);

export const CartProvider = ({ children }: IChildren): JSX.Element => {

    const [cartContext, setCartContext] = useState<any>();

    const getItemQuantty = (id: number) => {
        return cartContext.find((item: { id: number }) => item.id === id)?.quantity || 0
    };

    return (
        <CartContext.Provider value={{ cartContext, setCartContext }}>
            {children}
        </CartContext.Provider>
    );
};
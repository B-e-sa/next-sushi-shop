import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface IChildren {
    children: JSX.Element
};

interface IContext {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: IItem[]
};

interface IItem {
    id: number;
    quantity: number;
}

export const CartContext = createContext({} as IContext);

export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({ children }: IChildren): JSX.Element => {

    const [cartItems, setCartItems] = useState<IItem[]>([]);

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    };

    const increaseItemQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
              return [...currentItems, { id, quantity: 1 }]
            } else {
              return currentItems.map(item => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
              })
            }
          })
    }

    const decreaseItemQuantity = (id: number) => {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCart,
            cartItems
        }}>
            {children}
        </CartContext.Provider>
    );
};
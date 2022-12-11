import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '../../context/CartContext';


const RemoveButton = ({ id }: { id: number; }) => {


    const {
        getItemQuantity,
        increaseItemQuantity,
        removeFromCart,
        decreaseItemQuantity,
    } = useCart();

    const quantity = getItemQuantity(id);

    return (
        <div className='bg-black flex flex-col items-center h-8 relative top-4'>
            <div className='flex items-center justify-around w-40 '>
                <AiOutlineMinus
                    className='cursor-pointer bg-zinc-500'
                    onClick={() => decreaseItemQuantity(id)}
                />
                <span>{quantity}</span>
                <AiOutlinePlus
                    className='cursor-pointer bg-zinc-500'
                    onClick={() => increaseItemQuantity(id)}
                />
            </div>
            <div
                className='text-black bg-zinc-200 cursor-pointer'
                onClick={() => removeFromCart(id)}
            >REMOVE</div>
        </div>
    );
};

export default RemoveButton;
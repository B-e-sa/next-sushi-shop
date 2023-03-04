import React from 'react'
import data from '../utils/data.json'
import Image from 'next/image'
import Stars from './Stars'

interface ICartItem {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity = 0 }: ICartItem) => {
    const item = data.products.find(item => item.id === id)
    return (
        <div className='flex'>
            <Image
                src={item?.image}
                alt=""
                width={50}
                height={50}
            />
            <div className='flex w-full justify-evenly'>
                <div>
                    <p>{item?.name}</p>
                    <Stars starQuantity={item!.stars} />
                </div>
                <div>
                    <p>Price</p>
                    <p>{item?.price}</p>
                </div>
                <div>
                    <p>Quantity</p>
                    <p>{quantity}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>{quantity * item!.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
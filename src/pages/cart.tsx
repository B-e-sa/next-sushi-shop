import { type NextPage } from 'next'
import Input from '../components/Input';
import React, { useEffect, useRef, useState } from 'react'
import CartItem from '../components/CartItem';
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext';
import data from '../utils/data.json'

const Cart: NextPage = () => {

  const [storageItems, setStorageItems] = useState<any>();

  const { cartItems } = useCart();

  const CVVField = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const validateCVV = () => { }

  return (
    <div style={{ height: '76.5vh' }} className='flex'>
      <div className='bg-zinc-900 h-96'>
        {cartItems?.map((item: { id: number, quantity: number }) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className='bg-zinc-800'>
        <p className='text-white text-2xl'>payment</p>
        <form className='flex flex-col'>
          <Input name='Card holder name' type="text" placeholder='Card Holder Name' />
          <Input name='Card Number' type="text" placeholder='Card Number' />
          <div>
            <Input name='Exp Date' type="text" placeholder='Exp Date' />
            {/*<input
              type="tel"
              pattern='[0-9\s]{13,19}'
              className='appearance-non'
              onChange={validateCVV}
              ref={CVVField}
              placeholder='CVV'
              maxLength={3}
            >*/}
            <Input name='CVV' type='tel' style='ml-3 w-20' placeholder='CVV'/>
          </div>
          <button type="submit">CHECKOUT</button>
        </form>
      </div>
    </div>
  )
}

export default Cart;
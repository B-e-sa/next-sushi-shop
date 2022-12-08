import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs';
import { useCart } from '../../context/CartContext';

const AddButton = ({ id }: { id: number }) => {

  const { increaseItemQuantity } = useCart()

  return (
    <div
      className='bg-black w-40 flex items-center justify-center h-8 relative top-4 cursor-pointer'
      onClick={() => increaseItemQuantity(id)}
    >
      <BsFillHandbagFill /> + ADD TO CART
    </div>
  )
}

export default AddButton
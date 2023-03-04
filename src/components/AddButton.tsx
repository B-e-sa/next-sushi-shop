import React from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

const AddButton = ({ id }: { id: number }) => {

  const { increaseItemQuantity } = useCart();

  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'h-8 w-40',
        'relative top-4',
        'cursor-pointer',
        'bg-black'
      )}
      onClick={() => increaseItemQuantity(id)}
    >
      <BsFillHandbagFill />
      <span>+ ADD TO CART</span>
    </div>
  );
};

export default AddButton;
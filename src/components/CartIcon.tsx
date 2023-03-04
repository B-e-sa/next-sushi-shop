import { BsCartFill } from 'react-icons/bs';
import { useCart } from '../context/CartContext';

const CartIcon = () => {

    const { cartQuantity, handleCartDisplay } = useCart();

    return (
        <div className='relative'>
            <BsCartFill className='w-10 h-10 fill-amber-200 cursor-pointer' onClick={handleCartDisplay} />
            <span className='absolute bg-zinc-800 rounded-full flex justify-center items-center w-7 h-7 top-5 left-5 border-amber-200 border-2' >{cartQuantity}</span>
        </div>
    )
}

export default CartIcon
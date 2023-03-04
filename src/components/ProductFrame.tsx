import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import type IProducts from '../interfaces/IProducts';
import convertToCurrency from '../utils/convertToCurrency';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import Stars from './Stars';

const ProductFrame = ({ id, name, image, price, stars }: IProducts) => {

    const [currency, setCurrency] = useState('usd');
    const [locale, setLocale] = useState('en-us');

    const { getItemQuantity } = useCart();

    const quantity = getItemQuantity(id);

    return (
        <div className='text-white relative w-fit'>
            <div className=' bg-amber-200 text-black text-center -rotate-90 w-14 absolute top-4 -left-4'>
                sale
            </div>
            <div className='flex flex-col items-center bg-zinc-900 h-fit'>
                <Image
                    draggable='false'
                    alt={name}
                    src={image}
                    width={190}
                    height={190}
                />
                <p className='text-zinc-400 mt-2'>{name}</p>
                <p>{convertToCurrency(price, locale, currency)}</p>
                <Stars starQuantity={stars} />
                <div className='select-none'>
                    {quantity === 0 ?
                        <AddButton id={id} /> : <RemoveButton id={id} />}
                </div>
            </div>
        </div>
    );
};

export default ProductFrame;
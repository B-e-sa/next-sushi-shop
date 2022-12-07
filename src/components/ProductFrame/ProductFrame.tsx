import { useState } from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import IProducts from '../../interfaces/IProducts';
import convertToCurrency from '../../utils/convertToCurrency'
import Stars from '../Stars/Stars'

const getProductFrame = ({ products }: any) => {

    const [currency, setCurrency] = useState('usd');
    const [locale, setLocale] = useState('en-us')

    const quantity = 0;

    return (
        products?.map((item: any) => {
            return (
                <div key={item.name} className='text-white relative bg-zinc-800 w-52'>
                    <div className=' bg-amber-200 text-black text-center -rotate-90 w-10 absolute top-2 -left-2'>
                        sale
                    </div>
                    <div className='flex flex-col items-center bg-zinc-900'>
                        <img
                            className='h-40 object-cover'
                            src={item.image}
                            alt={item.name}
                        />
                        <p className='text-zinc-400 mt-2'>
                            {item.name}
                        </p>
                        <p>{convertToCurrency(item.price, locale, currency)}</p>
                        <Stars starQuantity={item.stars} />
                        {quantity !== 0 ?
                            (
                                <div className={'bg-black w-40 flex items-center justify-center h-8 relative top-4 cursor-pointer'}>
                                    <BsFillHandbagFill /> + ADD TO CART
                                </div>
                            )
                            :
                            (
                                <div className='bg-black w-40 flex h-8 relative items-center justify-around top-4'>
                                    <AiOutlineMinus className='cursor-pointer bg-zinc-500' />
                                    <span>{quantity}</span>
                                    <AiOutlinePlus className='cursor-pointer bg-zinc-500' />
                                </div>
                            )}
                    </div>
                </div>
            );
        }));
};

export default getProductFrame;
import Image from 'next/image';
import { GiCircle, GiPlainCircle } from 'react-icons/gi';
import { BsTelephoneInbound } from 'react-icons/bs';

const Footer = () => {

    const cards = [
        ['/assets/cards/paypal.svg', 'paypal'],
        ['/assets/cards/visa.svg', 'visa'],
        ['/assets/cards/mastercard.svg', 'mastercard']
    ];

    const footerNavs = [
        'HOME', 'ABOUT US', 'CATALOG',
        'DELIVERY', 'REVIEWS'
    ]

    return (
        <footer className='flex flex-col items-center bg-black relative h-44'>
            <div className='bg-amber-200 px-7 py-0.5'>
                <p className='font-semibold'>FREE DELIVERY FROM $30</p>
            </div>
            <div className='flex relative items-center'>
                <div className='absolute flex items-center justify-center -left-10'>
                    <GiPlainCircle className='fill-zinc-900 w-24 h-24 absolute' />
                    <GiPlainCircle className='fill-amber-300 z-50 w-3 h-3 right-3 bottom-3 absolute' />
                    <GiCircle className='fill-gray-600 w-14 h-14 absolute' />
                    <p className='text-white z-50 absolute text-2xl'>sushi</p>
                </div>
                <div className='flex flex-col items-center justify-center h-32'>
                    <nav className='text-white'>
                        {footerNavs.map((item, index) => {
                            return (
                                <span className='mx-4 cursor-pointer' key={item[index]}>
                                    {item}
                                </span>
                            )
                        })}
                    </nav>
                    <div className='flex'>
                        {cards.map((item) => {
                            return (
                                <span
                                    className='mx-2'
                                    key={item[1]}
                                >
                                    <Image
                                        loading='lazy'
                                        src={item[0]!}
                                        alt={item[1]!}
                                        width={50}
                                        height={50}
                                    ></Image>
                                </span>
                            )
                        })}
                    </div>
                </div>
                <div className='flex absolute items-center -right-44'>
                    <div className='bg-zinc-700 w-10 h-10 flex justify-center items-center'>
                        <BsTelephoneInbound className='fill-white' />
                    </div>
                    <p className='text-white'>TO CONTACT US</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
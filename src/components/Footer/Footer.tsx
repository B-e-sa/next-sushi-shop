import Image from 'next/image';

const Footer = () => {

    const cards = [
        ['/assets/cards/paypal.svg', 'paypal'],
        ['/assets/cards/visa.svg', 'visa'],
        ['/assets/cards/mastercard.svg', 'mastercard']
    ];

    const footerNavs = [
        'HOME', 'ABOUT US', 'CATALOG',
        'DELIVERY', 'CONTACT', 'REVIEWS'
    ]

    return (
        <div
            className='bg-black'
        >
            <div className='w-screen flex justify-center items-center flex-col '>
                <div className='bg-amber-200'>
                    FREE DELIVERY FROM $30
                </div>
                <nav className='text-white'>
                    {footerNavs.map((item, index) => {
                        return (
                            <span className='mx-4' key={item[index]}>
                                {item}
                            </span>
                        )
                    })}
                </nav>
                <div className='flex'>
                    {cards.map((item) => {
                        return (
                            <span key={item[1]}>
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
                <div>
                    <p>
                        TO CONTACT US
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
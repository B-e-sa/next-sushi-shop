import Image from 'next/image'

const CreditCards = () => {

    const creditCards = [
        ['/assets/cards/paypal.svg', 'paypal'],
        ['/assets/cards/visa.svg', 'visa'],
        ['/assets/cards/mastercard.svg', 'mastercard']
    ];

    return (
        <div className='flex'>
            {creditCards.map(([src, alt]) => {
                return (
                    <span className='mx-2' key={alt}>
                        <Image
                            loading='lazy'
                            src={src!}
                            alt={alt!}
                            width={50}
                            height={50}
                        ></Image>
                    </span>
                )
            })}
        </div>
    )
}

export default CreditCards
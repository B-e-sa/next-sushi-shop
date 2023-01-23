import CreditCards from "../CreditCards/CreditCards"

const Navs = () => {

    const footerNavs = [
        'HOME',
        'ABOUT US',
        'CATALOG',
        'DELIVERY',
        'REVIEWS'
    ]

    return (
        <div className='flex flex-col items-center justify-center h-32'>
            <nav className='text-white'>
                {footerNavs.map((item, index) => {
                    return (
                        <span
                            className='mx-4 cursor-pointer'
                            key={item[index]}
                        >{item}</span>
                    )
                })}
            </nav>
            <CreditCards />
        </div>
    )
}

export default Navs
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Header = () => {

    const { cartContext, setCartContext } = useContext(CartContext);

    return (
        <header className='text-white flex items-center w-screen justify-between absolute'>
            <div className='flex items-center'>
                <div className='flex bg-amber-200 w-14 h-14 justify-center mr-5'>
                    <img
                        src={'/menu.svg'}
                        alt=''
                        width={25}
                        height={25}
                    />
                </div>
                <span>MENU</span>
            </div>
        </header>
    );
};

export default Header;
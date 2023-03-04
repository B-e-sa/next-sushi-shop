import ContactUs from './ContactUs';
import Navs from './Navs';
import SushiLogo from './SushiLogo';

const Footer = () => {

    return (
        <footer className='flex flex-col items-center bg-black relative h-44 bottom-0'>
            <div className='bg-amber-200 px-7 py-0.5'>
                <p className='font-semibold'>FREE DELIVERY FROM $30</p>
            </div>
            <div className='flex relative items-center'>
                <SushiLogo />
                <Navs />
                <ContactUs />
            </div>
        </footer>
    );
};

export default Footer;
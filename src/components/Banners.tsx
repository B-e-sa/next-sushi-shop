import clsx from 'clsx';
import { useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import data from '../utils/data.json';
import BannerText from './BannerText';
import Catalog from './Catalog';
import Circles from './Circles';

const Banners = () => {

    const [currentBanner, setCurrentBanner] = useState(1);

    const bannerBackground = data.banners[currentBanner - 1]?.src

    return (
        <div className='flex flex-col justify-center h-screen '>
            <div
                className={clsx(
                    'flex justify-center flex-col',
                    'sm:flex-row-reverse',
                    'w-screen h-90vh',
                    'text-white'
                )}
            >
                <div
                    className={clsx(
                        'sm:w-10/12',
                        'w-auto h-screen',
                        'bg-cover bg-no-repeat'
                    )}
                    style={{ backgroundImage: `url(${bannerBackground})` }}>
                </div>
                <div className='flex items-center relative w-8/12 xl:left-80 left-40'>
                    <Circles />
                    <div className='sm:left-0 left-9 top-7 relative'>
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                    </div>
                    <BannerText />
                </div>
            </div>
            <div className='flex flex-row-reverse w-screen bg-zinc-800'>
                <Catalog />
            </div>
        </div >
    );
};

export default Banners;
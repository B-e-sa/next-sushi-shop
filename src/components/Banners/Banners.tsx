import { useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { GiCircle, GiPlainCircle } from 'react-icons/gi';
import data from '../../utils/data.json';


const Banners = () => {

    const [currentBanner, setCurrentBanner] = useState(1);

    return (
        <div className='flex flex-col h-screen justify-center'>
            <div
                className='flex justify-center sm:flex-row-reverse flex-col w-screen text-white'
                style={{ height: 'calc(100vh - 10vh)' }}
            >
                <div
                    className={'sm:w-10/12 -z-10 w-auto bg-cover bg-no-repeat h-screen'}
                    style={{backgroundImage: `url(${data.banners[currentBanner - 1]?.src})`}}>
                </div>
                <div className='flex items-center relative w-8/12 xl:left-80 left-40'>
                    <div className='-z-50 relative'>
                        <div className='flex items-center justify-center animate-half-slow-spin self-center left-1 -top-14 absolute'>
                            <GiPlainCircle className='fill-zinc-900 w-80 h-80 absolute' />
                            <GiPlainCircle className='fill-amber-300 left-16 top-6 z-50 w-6 h-6 absolute' />
                            <GiCircle className='fill-gray-500 w-48 h-48 absolute' />
                        </div>
                        <div className='top-7 relative'>
                            <AiOutlineLine className='rotate-90 w-8 h-8' />
                            <AiOutlineLine className='rotate-90 w-8 h-8' />
                            <AiOutlineLine className='rotate-90 w-8 h-8' />
                        </div>
                    </div>
                    <div>
                        <p className='
                        sm:text-6xl sm:w-96 font-serif
                        text-5xl w-fit 
                        '>
                            steaks<br />
                            <em className='text-amber-200' style={{ textShadow: "1px 1px #dacc4e" }}>sushi</em>, seafood<br />
                            & salads
                        </p>
                        <p className='w-64'>From Chinese to European cuisine, dishes are made quickly and deliciously.</p>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-zinc-800 flex flex-row-reverse' style={{ height: '10vh' }}>
                <div className='bg-amber-200 w-20 flex justify-center items-center flex-col self-end'
                    style={{ height: '10vh' }}>
                    <span className='-mb-8 '>CATALOG</span>
                    <img className='-mb-6' src='/longArrow.svg' alt='' width={65} height={65} />
                </div>
            </div>
        </div >
    );
};

export default Banners;
import clsx from 'clsx';
import { GiCircle, GiPlainCircle } from 'react-icons/gi';

const Circles = () => {
    return (
        <div className='-z-50 relative'>
            <div
                className={clsx(
                    'flex items-center justify-center self-center',
                    'sm:left-1 -left-14 sm:-top-14 -top-15 absolute',
                    'animate-half-slow-spin'
                )}
            >
                <GiPlainCircle className='fill-zinc-900 sm:w-80 sm:h-80 w-52 h-72 absolute' />
                <GiPlainCircle className='fill-amber-300 sm:left-16 sm:top-6 left-7 top-7 z-50 w-6 h-6 absolute' />
                <GiCircle className='fill-gray-500 sm:w-48 sm:h-48 w-32 h-32 absolute' />
            </div>
        </div>
    );
};

export default Circles;
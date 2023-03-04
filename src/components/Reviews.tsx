import Image from 'next/image';
import { useRef, useState } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import data from '../utils/data.json';
import Stars from './Stars';

const Reviews = () => {

    const sortedReviews =
        data.reviews
            .sort((a, b) => a.note - b.note)
            .reverse();

    const reviewContainer = useRef<HTMLDivElement>(null);

    const white = ' fill-white';
    const zinc = ' fill-zinc-500';

    const [leftArrowSettings, setLeftArrowSettings] = useState(zinc);
    const [rightArrowSettings, setRightArrowSettings] = useState(white);

    const handleClick = (action: string): void => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const containerScroll = reviewContainer.current!

        const scrollMaxWidth =
            containerScroll.scrollWidth - containerScroll.clientWidth

        if (action === 'right') {

            containerScroll.scrollLeft -= 350;

            setRightArrowSettings(white)

            if (containerScroll.scrollLeft == 0)
                setLeftArrowSettings(zinc);

        } else {

            containerScroll.scrollLeft += 350;

            setLeftArrowSettings(white);

            if (containerScroll.scrollLeft == scrollMaxWidth)
                setRightArrowSettings(zinc);

        }
    };

    return (
        <div className='flex flex-col'>
            <div className='flex self-end items-center mr-3'>
                <HiArrowLongRight
                    className={'cursor-pointer rotate-180 active:fill-slate-400' + leftArrowSettings}
                    size={leftArrowSettings === white ? 35 : 30}
                    onClick={() => handleClick('right')}
                />
                <HiArrowLongRight
                    className={'fill-white cursor-pointer active:fill-slate-400' + rightArrowSettings}
                    size={rightArrowSettings === white ? 35 : 30}
                    onClick={() => handleClick('left')}
                />
            </div>
            <div
                className='flex relative h-64 w-screen overflow-hidden items-center'
                ref={reviewContainer}
            >
                {sortedReviews.map(({ reviewerName, avatar, review, note, reviewDate, reviewId }) => {
                    return (
                        <div key={reviewId} className='bg-zinc-800 w-fit px-10 py-5 mx-6 relative h-fit'>
                            <p className='text-white absolute right-0 bg-zinc-600 text-xs w-12 text-center select-none'>
                                {reviewDate}
                            </p>
                            <Image
                                draggable='false'
                                className='rounded-full relative -top-10 select-none'
                                alt={reviewerName}
                                src={avatar}
                                width='65'
                                height='65'
                            />
                            <div className='flex -mt-5'>
                                <Image
                                    className='mr-3'
                                    alt="double quote"
                                    src='/assets/icons/double-quote.svg'
                                    width='20'
                                    height='20'
                                />
                                <p className='text-white text-xl'>
                                    {reviewerName}
                                </p>
                            </div>
                            <p className='text-zinc-400 text-sm w-96'>
                                <i>{review}</i>
                            </p>
                            <Stars starQuantity={note} />
                        </div>
                    );
                })};
            </div>
        </div>
    );
};

export default Reviews;
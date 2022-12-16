import Image from 'next/image';
import data from '../../utils/data.json';
import Stars from '../Stars/Stars';

const Reviews = () => {

    const sortedReviews =
        data.reviews
            .sort((a, b) => a.note - b.note)
            .reverse();

    return (
        <div className='flex relative h-64'>
            {sortedReviews.map(({ reviwerName, avatar, review, note, reviewDate }) => {
                return (
                    <div className='bg-zinc-800 w-4/12 px-10 py-5 mx-6 relative h-fit'>
                        <p className='text-white absolute right-0 bg-zinc-600 text-xs w-12 text-center'>
                            {reviewDate}
                        </p>
                        <Image
                            alt={reviwerName}
                            src={avatar}
                            width='65'
                            height='65'
                            className='rounded-full -mt-12 mb-3'
                        />
                        <div className='flex'>
                            <Image
                                alt="double quote"
                                src='/assets/icons/double-quote.svg'
                                width='20'
                                height='20'
                                className='mr-3'
                            />
                            <p className='text-white text-xl'>{reviwerName}</p>
                        </div>
                        <i><p className='text-zinc-400 text-sm w-96'>{review}</p></i>
                        <Stars starQuantity={note} />
                    </div>
                );
            })};
        </div>
    );
};

export default Reviews;
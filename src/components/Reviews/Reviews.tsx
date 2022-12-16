import data from '../../utils/data.json';
import Image from 'next/image';
import Stars from '../Stars/Stars';
import getHigherNotes from '../../utils/getHigherNotes';
import { useEffect } from 'react';

const Reviews = () => {

    const sortedReviews =
        data.reviews
            .sort((a, b) => a.note - b.note)
            .reverse()

    return (
        <>
            {sortedReviews.map(({ reviwerName, avatar, review, note }) => {
                return (
                    <div>
                        <Image
                            alt={reviwerName}
                            src={avatar}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                        <p className='text-white'>{reviwerName}</p>
                        <p className='text-zinc-400'>{review}</p>
                        <Stars starQuantity={note}/>
                    </div>
                );
            })};
        </>
    );
};

export default Reviews;
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib/esm/iconContext'

interface IStar {
  starQuantity: number
} 

const Stars = ({ starQuantity }: IStar) => {

  const printStars = () => {

    const stars: JSX.Element[] = [];

    // if has 5 stars
    if (starQuantity === 5) {

      for (let i = 0; i < 5; i++) {
        stars.push(<BsStarFill className='fill-yellow-400' />);
      };


    } else {

      // push full stars
      for (let i = 0; i < Math.floor(starQuantity); i++) {
        stars.push(<BsStarFill className='fill-yellow-400' />);
      };

      // see if number is integer(hasn't half stars)
      if (Number.isInteger(starQuantity)) {

        // fill with empty stars
        for (let i = 0; i < 5 - Math.floor(starQuantity); i++) {
          stars.push(<BsStar className='fill-yellow-400' />);
        };

      } else {

        stars.push(<BsStarHalf className='fill-yellow-400' />);

        for (let i = 0; i < 4 - Math.floor(starQuantity); i++) {
          if (4 - Math.floor(starQuantity) === 0)
            break;
          stars.push(<BsStar className='fill-yellow-400' />);
        };
      };
    };

    return stars;

  };

  return (
    <div className='flex z-50 '>
      {printStars()}
    </div>
  );
};

export default Stars;
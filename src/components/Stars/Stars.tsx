import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface IStar {
  starQuantity: number
}

const Stars = ({ starQuantity }: IStar) => {

  const starColor = "fill-yellow-200"

  const filledStar = <BsStarFill className={starColor} />;

  const emptyStar = <BsStar className={starColor} />;

  const halfStar = <BsStarHalf className={starColor} />;

  const printStars = () => {

    const stars: JSX.Element[] = [];

    // if has 5 stars
    if (starQuantity === 5) {

      for (let i = 0; i < 5; i++) {
        stars.push(filledStar);
      };


    } else {

      // push full stars
      for (let i = 0; i < Math.floor(starQuantity); i++) {
        stars.push(filledStar);
      };

      // see if number is integer(hasn't half stars)
      if (Number.isInteger(starQuantity)) {

        // fill with empty stars
        for (let i = 0; i < 5 - Math.floor(starQuantity); i++) {
          stars.push(emptyStar);
        };

      } else {

        stars.push(halfStar);

        for (let i = 0; i < 4 - Math.floor(starQuantity); i++) {
          if (4 - Math.floor(starQuantity) === 0)
            break;
          stars.push(emptyStar);
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
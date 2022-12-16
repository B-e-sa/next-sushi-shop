import getHigherNotes from '../../utils/getHigherNotes';
import data from '../../utils/data.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const PopularProducts = () => {

    const topProducts = getHigherNotes(data.products)

    return (
        <div className='flex flex-col items-center justify-center md:h-136 h-200 w-screen pb-9'>
            <p className='text-white self-center'>Popular</p>
            <div
                className='grid md:grid-cols-4 grid-cols-2 gap-5 repeat'>
                {topProducts.map((item) => {
                    return <ProductFrame {...item} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default PopularProducts;
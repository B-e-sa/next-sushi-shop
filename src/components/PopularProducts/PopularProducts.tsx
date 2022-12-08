import getTopProducts from '../../utils/getTopProducts';
import products from '../../utils/products.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const PopularProducts = () => {

    const topProducts = getTopProducts(products.products)

    return (
        <div className='flex flex-col flex-wrap items-center justify-center h-136 w-screen pb-9'>
            <p className='text-white self-start'>Popular this week</p>
            <div
                className='grid grid-cols-4 gap-5'>
                {topProducts.map((item) => {
                    return <ProductFrame {...item} />
                })}
            </div>
        </div>
    );
};

export default PopularProducts;
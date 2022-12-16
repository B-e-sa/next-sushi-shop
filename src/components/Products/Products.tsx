import data from '../../utils/data.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div className='flex justify-center items-center h-200'>
            <div
                className='grid md:grid-cols-4 grid-cols-2 gap-5 w-fit mx-auto flex-wrap'
                style={{ gridTemplateRows: '20rem' }}
            >
                {data.products.map((item) => {
                    return <ProductFrame {...item} key={item.id} />
                })}
            </div>
        </div>
    );
};

export default Products;
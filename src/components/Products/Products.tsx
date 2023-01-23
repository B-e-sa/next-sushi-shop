import data from '../../utils/data.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div className='md:my-0 my-64 pb-5 flex flex-col justify-center items-center h-200'>
            <div>
                <div className='self-start'>
                    <p className='text-white'>More options</p>
                </div>
                <div
                    className='grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-5 w-fit mx-auto flex-wrap'
                    style={{ gridTemplateRows: '20rem' }}
                >
                    {data.products.map(item => <ProductFrame {...item} key={item.id} /> )}
                </div>
            </div>
        </div>
    );
};

export default Products;
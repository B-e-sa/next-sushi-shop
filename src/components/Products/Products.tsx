import data from '../../utils/data.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div
            className='grid md:grid-cols-4 grid-cols-2 gap-5 w-fit mx-auto h-132 flex-wrap '
            style={{ gridTemplateRows: '20rem'}}
        >
            {data.products.map((item) => {
                return <ProductFrame {...item} key={item.id} />
            })}
        </div>
    );
};

export default Products;
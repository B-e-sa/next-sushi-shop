import products from '../../utils/products.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-2 w-fit mx-auto h-132' style={{ gridTemplateRows: '20rem' }}>
            {products.products.map((item) => {
                return <ProductFrame {...item} key={item.id}/>
            })}
        </div>
    );
};

export default Products;
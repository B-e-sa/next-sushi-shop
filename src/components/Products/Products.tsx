import products from '../../utils/products.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div className='grid grid-cols-4 w-fit ml-auto mr-auto gap-5 gap-y-14 h-fit'>
            <ProductFrame products={products.products} />;
        </div>
    );
};

export default Products;
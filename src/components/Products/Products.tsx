import products from '../../utils/products.json';
import ProductFrame from '../ProductFrame/ProductFrame';

const Products = () => {
    return (
        <div className='grid grid-cols-4 w-fit ml-auto mr-auto gap-5 gap-y-14 h-fit'>
            {products.products.map((item) => {
                return <ProductFrame {...item} key={item.id}/>
            })}
        </div>
    );
};

export default Products;
import React, { useEffect } from 'react'
import useGetTopProducts from '../../hooks/useGetTopProducts'
import products from '../../utils/products.json'
import ProductFrame from '../ProductFrame/ProductFrame'

const PopularProducts = () => {

    const topProducts = useGetTopProducts(products.products);

    return (
        <div className='flex flex-col flex-wrap items-center justify-center h-136 w-screen pb-9'>
            <p className='text-white self-start'>Popular this week</p>
            <div
                className='grid grid-cols-4 gap-5'>
                <ProductFrame products={topProducts} />
            </div>
        </div>
    );
};

export default PopularProducts;
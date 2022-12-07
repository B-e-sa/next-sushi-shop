import React from 'react'
import products from '../../utils/products.json'
import ProductFrame from '../ProductFrame/ProductFrame'

const PopularProducts = () => {
    return (
        <div className='flex flex-col flex-wrap items-center h-96 w-screen'>
            <p className='text-white self-start'>Popular this week</p>
            <div
                className='flex w-screen justify-evenly items-center'>
                <ProductFrame products={products.popularThisWeek} />
            </div>
        </div>
    )
}

export default PopularProducts
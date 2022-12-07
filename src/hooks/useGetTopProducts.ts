import { useEffect, useState } from 'react';
import IProducts from '../interfaces/IProducts'

const useGetTopProducts = (products: IProducts[]) => {

    const [topProducts, setTopProducts] = useState<any>();

    useEffect(() => {
        const filteredTopProducts = products.filter(item => item.stars > 4)
        setTopProducts(filteredTopProducts.sort((a, b) => a.stars - b.stars).reverse())
    }, []);

    return topProducts;

};

export default useGetTopProducts;
import { useEffect, useState } from 'react';

interface IProducts {
    id: number
    name: string
    image: string
    price: number
    stars: number
}

const useGetTopProducts = (products: IProducts[]) => {

    const [topProducts, setTopProducts] = useState<any>()

    useEffect(() => {
        const filteredTopProducts = products.filter(item => item.stars > 4)
        setTopProducts(filteredTopProducts.sort((a, b) => a.stars - b.stars).reverse())
    }, [])

    return topProducts

}

export default useGetTopProducts
import IProducts from "../interfaces/IProducts";

const getHigherNumber = (products: IProducts[]) => {

    const topProducts = products.filter(item => item.stars > 4);

    const topProductsDecreasingOrder =
        topProducts.sort((a, b) => a.stars - b.stars).reverse();

    return topProductsDecreasingOrder;
};

export default getHigherNumber;
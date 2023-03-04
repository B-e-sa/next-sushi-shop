import { type NextPage } from 'next';
import Banners from '../components/Banners';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PopularProducts from '../components/PopularProducts';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import Subscribe from '../components/Subscribe';
import { useCart } from '../context/CartContext';
import Cart from './cart';

const Home: NextPage = () => {

  const { cartDisplaying } = useCart();

  return (
    <Layout>
      {
        !cartDisplaying ?
          <>
            <Banners />
            <PopularProducts />
            <Categories />
            <Products />
            <Subscribe />
            <Reviews />
          </>
          :
          <Cart />
      }
    </Layout>
  );
};

export default Home;

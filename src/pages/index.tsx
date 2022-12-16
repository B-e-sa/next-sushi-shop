import { type NextPage } from 'next';
import Banners from '../components/Banners/Banners';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import Products from '../components/Products/Products';
import Reviews from '../components/Reviews/Reviews';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banners />
      <PopularProducts />
      <Categories />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

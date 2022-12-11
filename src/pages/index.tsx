import { type NextPage } from 'next';
import Banners from '../components/Banners/Banners';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import Products from '../components/Products/Products';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banners />
      <PopularProducts />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;

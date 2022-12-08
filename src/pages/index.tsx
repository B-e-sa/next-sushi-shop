import { type NextPage } from 'next';
import Banners from '../components/Banners/Banners';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import Products from '../components/Products/Products';
import useIsMobile from '../hooks/useIsMobile';

const Home: NextPage = () => {

  const isMobile = useIsMobile();

  const setMarginLeft = (isMobileUser: boolean) => {
      if(!isMobileUser)
          return '10px';
      return '';
  };


  return (
    <div> ;
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

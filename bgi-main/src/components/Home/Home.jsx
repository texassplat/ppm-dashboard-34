import About from '../About/About';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import ContentSlider from '../ContentSlider/ContentSlider';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';
import Pricing from '../Pricing/Pricing';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Work from '../Work/Work';
import LatestArticles from '../LatestArticles/LatestArticles';

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Feature />
      <Service />
      <LatestArticles />
      <ContentSlider />
      <About />
      <Counter />
      <Work />
      <Pricing />
      <Testimonial />
    </>
  );
};

export default Home;

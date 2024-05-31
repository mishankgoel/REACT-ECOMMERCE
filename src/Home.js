import FeatureProducts from './components/FeatureProduct.js';
import HeroSection from './components/HeroSection.js';
import Services from './components/Services.js';
import Trusted from './components/Trusted.js';

const Home = () => {
  const data = {
    name: "Mishank Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};


export default Home;
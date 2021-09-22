import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <div className='more'>
      <p>Previna-te da covid-19 e use sempre a Mascara.</p>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

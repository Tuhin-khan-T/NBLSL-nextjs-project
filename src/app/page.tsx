import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Brokerage from './Home-FeaturesSection/Brokerage';




const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brokerage/>
      <Footer/>
     </div>
  );
};

export default page;
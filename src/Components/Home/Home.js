import React from 'react';
import About from '../About/About';
import ContactUs from '../Contact/ContactUs';
import Banner from './Banner';
import Footer from './Footer';
const Home = () => {
      return (
            <div >

                  <Banner></Banner>
                  <About></About>
                  <ContactUs></ContactUs>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
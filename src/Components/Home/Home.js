import React from 'react';
import About from '../About/About';
import ContactUs from '../Contact/ContactUs';
import Service from '../Services/Service';
import Services from '../Services/Services';
import Banner from './Banner';
import Footer from './Footer';
const Home = () => {
      return (
            <div >

                  <Banner></Banner>
                  <About></About>
                  <Services></Services>
                  {/* <Service></Service> */}
                  <ContactUs></ContactUs>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
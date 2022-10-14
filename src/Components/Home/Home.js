import React from 'react';
import './Home.css'
import doctors from '../../assets/images/doctors.jpg'
const Home = () => {
      return (
            <div >
                  <div className='home-nav'>
                        <div>
                              <p className='text-white'>Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted</p>
                              <p><span>Stay Connected with Health Care</span></p>
                              <p className='pera-text'>Digital problem solving involves the use of the skills, strategies, and approaches (including mindsets) needed to navigate online in everyday. Here ,you can buy different types of calculator</p>
                              <button className='home-btn'>See More </button>
                        </div>
                        <div>
                              {/* <img src={doctors} /> */}
                        </div>
                  </div>

            </div>
      );
};

export default Home;
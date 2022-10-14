import React from 'react';
import './Banner.css'
import doctors from '../../assets/images/doctors.jpg'

const Banner = () => {
      return (
            <div>
                  <div className='home-nav'>
                        <div>

                              <p><span>Time and health </span>are two precious assets</p>
                              <p className='pera-text'>Digital problem solving involves the use of the skills, strategies, and approaches (including mindsets) needed to navigate online in everyday. Here ,you can buy different types of calculator</p>
                              <button className='home-btn'>See More </button>
                        </div>
                        <div>
                              <img src={doctors} />
                        </div>
                  </div>
            </div>
      );
};

export default Banner;
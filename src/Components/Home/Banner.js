import React from 'react';
import './Banner.css'
import doctors from '../../assets/images/doctors.jpg'

const Banner = () => {
      return (
            <div>
                  <div className='home-nav'>
                        <div>

                              <p><span>Time and health </span>are two precious assets</p>
                              <p className='pera-text'>Efforts made to maintain or restore physical, mental, or emotional well-being especially by trained and licensed professionals usually hyphenated when used attributively health-care providers.</p>
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
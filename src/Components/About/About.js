import React from 'react';
import './About.css'
import about from '../../assets/images/about.jpg'
const About = () => {
      return (
            <div>
                  <div class="about-section">
                        <h1>About Us </h1>
                        <p>Health care or healthcare is the improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease, illness, injury</p>
                        <p>Efforts made to maintain or restore physical, mental, or emotional well-being especially by trained and licensed professionals —usually hyphenated when used attributively health-care providers.Other types of health services include mental health care, dental care, laboratory and diagnostic care, substance abuse treatment, preventative care, physical and occupational health, nutritional support, pharmaceutical care, transportation, and prenatal care.</p>
                  </div>

                  <div className='about'>
                        <div>
                              <img src={about} />
                        </div>
                        <div>

                              <p><span>Provide the best service for you.Fastest emergency support. </span></p>
                              <p className='pera-text'>Digital problem solving involves the use of the skills, strategies, and approaches (including mindsets) needed to navigate online in everyday. Here ,you can buy different types of calculator</p>
                              <button className='about-btn'>See More </button>
                        </div>

                  </div>

            </div>
      );
};

export default About;
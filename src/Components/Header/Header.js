import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div>
                  <div className='nav fixed-top'>
                        <div className='web-name'>
                              <h2>Health<span class="head-title">Care</span></h2>
                        </div>

                        <Link to="/" className='link-nav'>Home</Link>
                        <Link to="/Services" className='link-nav'>Services</Link>
                        <Link to="/About" className='link-nav'>About Us</Link>
                        <Link to="/Dashboard" className='link-nav'>Dashboard</Link>
                        <Link to="/Contact" className='link-nav'>Contact Us</Link>




                  </div>
            </div>
      );
};

export default Header;
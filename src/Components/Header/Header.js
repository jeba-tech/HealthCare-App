import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div>
                  <div className='nav fixed-top'>
                        <div className='web-name'>
                              <p>Health Care</p>
                        </div>

                        <Link to="/" className='link'>Home</Link>
                        <Link to="/Services" className='link'>Services</Link>
                        <Link to="/About" className='link'>About Us</Link>
                        <Link to="/Dashboard" className='link'>Dashboard</Link>
                        <Link to="/Contact" className='link'>Contact Us</Link>




                  </div>
            </div>
      );
};

export default Header;
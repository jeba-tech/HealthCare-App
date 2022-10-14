import React from 'react';
import './Footer.css';

const Footer = () => {
      return (
            <div>
                  {/* <footer className='footer-style'>
                        <p><small>copyright @  2022</small></p>
                  </footer> */}
                  <div class="footer-clean">
                        <footer>
                              <div class="container">
                                    <div class="row justify-content-center">
                                          <div class="col-sm-4 col-md-3 item">
                                                <h3>Services</h3>
                                                <ul>
                                                      <li><a href="#">Dental Support</a></li>
                                                      <li><a href="#">Eye Care</a></li>
                                                      <li><a href="#">Medical Support</a></li>
                                                </ul>
                                          </div>
                                          <div class="col-sm-4 col-md-3 item">
                                                <h3>About</h3>
                                                <ul>
                                                      <li><a href="#">Company</a></li>
                                                      <li><a href="#">Team</a></li>
                                                      <li><a href="#">Legacy</a></li>
                                                </ul>
                                          </div>
                                          <div class="col-sm-4 col-md-3 item">
                                                <h3>Careers</h3>
                                                <ul>
                                                      <li><a href="#">Job openings</a></li>
                                                      <li><a href="#">Employee success</a></li>
                                                      <li><a href="#">Benefits</a></li>
                                                </ul>
                                          </div>
                                          <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                                                <p class="copyright">All Rights Reserved © 2022</p>
                                          </div>
                                    </div>
                              </div>
                        </footer>
                  </div>
            </div>
      );
};

export default Footer;
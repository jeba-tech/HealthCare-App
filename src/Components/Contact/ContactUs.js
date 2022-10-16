import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
      return (
            <div style={{ height: '400px', backgroundColor: 'Silver', }} className="container shadow margin rounded-3 d-flex justify-content-center align-items-center mt-5"
                  id="subscribe">

                  <div>
                        <h1>Let's Stay In Touch</h1>
                        <p>Get updates on sales, specials and more
                        </p>
                        <input className="form-control" type="email" placeholder="Enter your e-mail..."
                        />
                        <textarea className="form-control mt-3" type="email" placeholder="Enter your Massage..."
                        />

                        <button className="btn btn-outline-dark mt-3">Submit</button>
                  </div>
            </div>
      );
};

export default ContactUs;
import React from 'react';

const Service = ({ service }) => {
      return (
            <div>
                  <div className="card" style={{ width: 288 }} >
                        <img src={service.photograph} className="card-img-top" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">{service.name}</h5>
                              <p className="card-text">{service.description}</p>
                              <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                  </div>
            </div>
      );
};

export default Service;
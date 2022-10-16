import React from 'react';

const Service = ({ service }) => {
      return (
            <div>

                  <div className="card responsive" style={{ width: 388 }} >
                        <img src={service.photograph} className="card-img-top" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">{service.name}</h5>
                              <p className="card-text">{service.description.slice(0, 150)}......</p>
                              <a href="#" className="btn btn-dark text-center">See More</a>
                        </div>
                  </div>
            </div>
      );
};

export default Service;
import React from 'react';
import { useParams } from 'react-router-dom';

const ViewPatient = () => {
      const { id } = useParams();
      const { name } = useParams();
      const { address } = useParams();
      const { dob } = useParams();
      const { gender } = useParams();
      const { phone } = useParams();
      return (
            <div>

                  <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>



                        <div className='rounded fs-6' style={{ padding: "50px", background: "#B0C4DE" }}>
                              <h1>Patient Information</h1>
                              <br />
                              <p>UserID: {id}</p>
                              <p>Name: {name}</p>
                              <p>Address: {address}</p>
                              <p>Gender: {gender}</p>
                              <p>Date of Birth: {dob}</p>
                              <p>Phone: {phone}</p>
                        </div>


                  </div>
            </div>
      );
};

export default ViewPatient;
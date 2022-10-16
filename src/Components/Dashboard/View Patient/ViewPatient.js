import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Context API/Context';
import './ViewPatient.css'

const ViewPatient = () => {

      const { users, setUsers } = useContext(GlobalContext);

      const { id } = useParams();

      const user = users.filter(user => user.id == id);

      return (



            <div className="d-flex justify-content-center align-items-center patient-Data_View_box" style={{ height: '83vh' }}>

                  <h1 className='me-4'>Patient<br></br><span className='patient-info-text'> Information</span> </h1>
                  <div className='rounded fs-6 patient-info-text' >

                        <br />
                        <div className="d-flex justify-content-center align-items-center">
                              <div>
                                    <p>UserID: {id}</p>
                                    <p>Name: {user[0].name}</p>
                                    <p>Address: {user[0].address}</p>
                                    <p>Gender: {user[0].gender}</p>
                                    <p>Date of Birth: {user[0].dob}</p>
                                    <p>Phone: {user[0].phone}</p>
                              </div>
                        </div>
                  </div>


            </div>
      );
};

export default ViewPatient;
import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context API/Context';
import { v4 as uuid } from 'uuid';
import './CreatePatient.css'

const CreatePatient = () => {
      const [id, setId] = useState('');
      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [phone, setPhone] = useState('');
      const [gender, setGender] = useState('');
      const [dob, setDob] = useState('');

      const { users, setUsers } = useContext(GlobalContext);

      const updateId = (e) => {
            setId(e.target.value);
      }
      const updateName = (e) => {
            setName(e.target.value);
      }
      const updateAddress = (e) => {
            setAddress(e.target.value);
      }
      const updatePhone = (e) => {
            setPhone(e.target.value);
      }
      const updateGender = (e) => {
            setGender(e.target.value);
      }
      const updateDob = (e) => {
            setDob(e.target.value);
      }
      const addUser = (e) => {
            e.preventDefault();
            setUsers([...users, { id: id, name: name, address: address, phone: phone, dob: dob }])
      }

      return (
            <div>

                  <div >

                        <div className='patient_addtbox'>

                              <div className="hero-content flex-col lg:flex-row-reverse w-auto">
                                    <div className="text-center lg:text-left px-8">


                                          <h1 className='text-5xl font-extrabold text-dark '>Create <span className='Add_text'>Paient</span> </h1>

                                    </div>
                                    <div>
                                          <div >

                                                <form onSubmit={addUser} method="post">

                                                      <div className='d-flex justify-center '>
                                                            <div className='m-8'>
                                                                  <div className="patient_addinput-container">

                                                                        <input name="name" type="text" placeholder="Name" value={name} onChange={updateName} className="input input-bordered  w-64 mt-2 " required />
                                                                  </div>

                                                                  <div className="patient_addinput-container">

                                                                        <input name="peraddress" value={address} onChange={updateAddress} type="text" placeholder="Permanent Address" className="input input-bordered w-64 mt-2" required />
                                                                  </div>
                                                                  <div className="patient_addinput-container">

                                                                        <input name="phone" type="text" placeholder="Phone Number" value={phone} onChange={updatePhone} className="input input-bordered  w-64 mt-2" required />

                                                                  </div>
                                                                  <div >

                                                                        <FormGroup>
                                                                              <FormLabel>Gender</FormLabel>

                                                                              <input type="radio" value={gender} onChange={updateGender} />
                                                                              <label for="male">Male</label>
                                                                              <input type="radio" value={gender} onChange={updateGender} />
                                                                              <label for="female">Female</label><br />
                                                                              <input type="radio" value={gender} onChange={updateGender} />
                                                                              <label for="others">Others</label>

                                                                        </FormGroup>
                                                                  </div>
                                                                  <div className="patient_addinput-container text-dark">

                                                                        <input name="dob" type="date" placeholder="Date of Birth" value={dob} onChange={updateDob} className="mt-2 input input-bordered  text-dark w-64" required />
                                                                  </div>


                                                                  <div >
                                                                        <button className=" Patient_btn_form-submit mt-3 " type="submit" >Create</button>
                                                                  </div>
                                                            </div>


                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div >


                        </div >
                  </div>
            </div>
      );
};

export default CreatePatient;
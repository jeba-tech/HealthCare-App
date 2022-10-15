import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context API/Context';
import { v4 as uuid } from 'uuid';
import './CreatePatient.css'

const CreatePatient = () => {
      const [name, setName] = useState('');
      const { addUser } = useContext(GlobalContext);
      const navigate = useNavigate();
      const onSubmit = () => {
            const newUser = {
                  id: uuid(),
                  name
            }
            addUser(newUser);
            navigate('/Dashboard');
      }

      const onChange = (e) => {
            setName(e.target.value);
      }

      return (
            <div>
                  <h1>Create Paient</h1>
                  <Form onSubmit={onSubmit}>
                        <FormGroup>
                              <FormLabel>Name</FormLabel>
                              <input type="text" value={name} onChange={onChange} placeholder="Enter Name" />
                        </FormGroup>
                        {/* <FormGroup>
                              <FormLabel>Address</FormLabel>
                              <input type="text" placeholder="Enter Address" />
                        </FormGroup>
                        <FormGroup>
                              <FormLabel>Phone</FormLabel>
                              <input type='number' placeholder="Enter Phone Number" />
                        </FormGroup>
                        <FormGroup>
                              <FormLabel>Gender</FormLabel>

                              <input type="radio" value="Male" />
                              <label for="male">Male</label>
                              <input type="radio" value="Female" />
                              <label for="female">Female</label><br />
                              <input type="radio" value="Others" />
                              <label for="others">Others</label>

                        </FormGroup>
                        <FormGroup>
                              <FormLabel>Date of birth</FormLabel>
                              <input type='date' placeholder="Enter Date of birth" />
                        </FormGroup> */}
                        <Button type="submit">Submit</Button>
                        <Link to="/Dashboard" className='btn btn-danger ml-2'>Cancel</Link>
                  </Form>
                  {/* <div className='add-ride-back'>

                        <div className='rider_addtbox'>

                              <div className="hero-content flex-col lg:flex-row-reverse w-auto">
                                    <div className="text-center lg:text-left px-8">


                                          <h1 className='text-5xl font-extrabold text-dark '>Add <span className='Add_Ridertext'>New Rider</span> </h1>

                                    </div>
                                    <div>
                                          <div >

                                                <form action="http://127.0.0.1:8000/api/riderList" method="post">

                                                      <div className='d-flex justify-center '>
                                                            <div className='m-8'>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="name" type="text" placeholder="Name" className="input input-bordered  w-64 mt-2 " required />
                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <select class="select select-bordered  mt-2 col-md-9 fs-5  mt-3 w-75 form-select" name="gender">
                                                                              <option disabled selected>Gender</option>
                                                                              <option value="Male">Male</option>
                                                                              <option value="Female">Female</option>
                                                                              <option value="Others">Others</option>
                                                                        </select>
                                                                  </div>
                                                                  <div className="rider_addinput-container text-dark">

                                                                        <input name="dob" type="date" placeholder="Date of Birth" className="mt-2 input input-bordered  text-dark w-64" required />
                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="peraddress" type="text" placeholder="Permanent Address" className="input input-bordered w-64 mt-2" required />
                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="preaddress" type="text" placeholder="Present Address" className="input input-bordered w-64 mt-2" required />
                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered  w-64 mt-2" required />

                                                                  </div>

                                                            </div>

                                                            <div className=''>

                                                                  <div className=' mt-8 rider_addinput-container '>

                                                                        <input name="email" type="text" placeholder="Email" className="input input-bordered w-64 mt-2" required />
                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="nid" type="text" placeholder="NID No" className="input input-bordered  w-64 mt-2" required />

                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="dlic" type="text" placeholder="Driving License No" className="input input-bordered  w-64 mt-2" required />

                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="username" type="text" placeholder="Username" className="input input-bordered  w-64 mt-2" required />

                                                                  </div>
                                                                  <div className="rider_addinput-container">

                                                                        <input name="password" type="text" placeholder="Password" className="input input-bordered  w-64 mt-2" required />

                                                                  </div>

                                                                  



                                                                  <div >
                                                                        <button className=" Rider_btn_form-submit mt-3 " type="submit" >Add</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div >


                        </div >
                  </div> */}
            </div>
      );
};

export default CreatePatient;
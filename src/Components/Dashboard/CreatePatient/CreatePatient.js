import React from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreatePatient = () => {
      return (
            <div>
                  <h1>Create Paient</h1>
                  <Form>
                        <FormGroup>
                              <FormLabel>Name</FormLabel>
                              <input type="text" placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup>
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
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                        <Link to="/Dashboard" className='btn btn-danger ml-2'>Cancel</Link>
                  </Form>
            </div>
      );
};

export default CreatePatient;
import React, { useContext } from 'react';
import { Button, Container, ListGroup, ListGroupItem, Nav, Navbar, NavbarBrand, NavItem, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from './Context API/Context';
const Dashboard = () => {
      const { users } = useContext(GlobalContext);
      console.log(users);
      return (
            <div>
                  <Navbar className='w-50 ms-5' color='dark' dark>
                        <Container>
                              <NavbarBrand href="/">My Team</NavbarBrand>
                              <Nav>
                                    <NavItem>
                                          <Button variant="secondary"><Link to="/CreatePatient" className='link'>Create Patient</Link></Button>
                                    </NavItem>
                              </Nav>
                        </Container>
                  </Navbar>
                  <ListGroup className='w-50 ms-5'>
                        {
                              users.map(user => (
                                    <ListGroupItem className='d-flex'>
                                          <p className='me-5'>{user.name}</p>
                                          <p className='me-5'>{user.address}</p>
                                          <p className='me-5'>{user.phone}</p>
                                          <p className='me-5'>{user.gender}</p>
                                          <p className='me-5'>{user.dob}</p>
                                          <p className='me-5'>uuuu</p>
                                          <div className='ms-5'>
                                                <Button variant="secondary"><Link to="/ViewPatient" className='link'>View Patient</Link></Button>
                                          </div>
                                    </ListGroupItem>
                              ))}


                  </ListGroup>


            </div>
      );
};

export default Dashboard;
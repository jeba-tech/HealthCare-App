import React, { useContext } from 'react';
import { Button, Container, ListGroup, ListGroupItem, Nav, Navbar, NavbarBrand, NavItem, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from './Context API/Context';
import './Dashboard.css'

const Dashboard = () => {
      const { users } = useContext(GlobalContext);
      console.log(users);
      return (
            <div >
                  <div >
                        <Navbar className='w-50 display mt-5' >
                              <Container>
                                    <NavbarBrand href="/">Patient List</NavbarBrand>
                                    <Nav>
                                          <NavItem>
                                                <Button variant="secondary"><Link to="/CreatePatient" className='link'>Create Patient</Link></Button>
                                          </NavItem>
                                    </Nav>
                              </Container>
                        </Navbar>
                  </div>
                  <div >
                        <ListGroup className='w-75 mt-5 border  '>
                              {
                                    users.map(user => (
                                          <ListGroupItem className='d-flex display mb-2 '>
                                                <p className='me-5'>{user.name}</p>
                                                <p className='me-5'>{user.address}</p>
                                                <p className='me-5'>{user.phone}</p>
                                                <p className='me-5'>{user.gender}</p>
                                                <p className='me-5'>{user.dob}</p>
                                                <div className='ms-5'>
                                                      <Button variant="secondary"><Link to={`/ViewPatient/${user.id}`} className='link'>View Patient</Link></Button>
                                                </div>
                                          </ListGroupItem>
                                    ))}


                        </ListGroup>
                  </div>


            </div>
      );
};

export default Dashboard;
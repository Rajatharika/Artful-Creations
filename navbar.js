import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Art.css';
import { Link } from 'react-router-dom';
function NavScrollExample() {
  const picture = {
    name: 'logo',
    url: 'https://i.ibb.co/0XWvM7w/Logo-removebg-preview-modified.png',
    imageSize: 500,
  };

  return (
    <Navbar expand="lg" className="navv" fixed="top" style={{ marginLeft: '180px' }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: '30px', marginLeft: '20px' }}>
          HOME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Crafts </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Paintings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="buttons">
            <a href="" calssName="btn btn-outline-dark ms2">
              <i className="fa fa-sign-in me-1">
                <Link to='/signIn' style={{
                  TextDecoration:'none',
                  color:'black',
                }}>Login</Link>
              </i>
            </a>
          </div>
          <Form className="d-flex">
            <Button variant="outline-dark">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;
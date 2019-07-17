import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                    <Navbar bg="light" expand="lg">
          <Navbar.Brand >
            <Link to="/">
            Movie App
            </Link>
           
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
                <Link to='/movies'>
                Movies
                </Link>
               </Nav.Link>
              <Nav.Link>
                <Link to="/tvshows">
                TV Shows
                </Link>
                </Nav.Link>
              
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link >
                <Link to='/login'>
                Login
                </Link>
               </Nav.Link>
              <Nav.Link >  <Link to='/register'>
               Register
                </Link></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
            </div>
        )
    }
}

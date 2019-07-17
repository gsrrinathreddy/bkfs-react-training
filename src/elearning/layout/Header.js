import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
  }
  // methods should go here
  componentDidMount(){
    
  }
  // All lifecycle methods between render and constructor. 
    render() {

      // All function definitions have to go between class/constructor
      // and render method or below render method.
    // All logic has to go between render and return method  
      
      return (
            <div>
                            <Navbar bg="light" expand="lg">
          <Navbar.Brand >
           
            E Learning App
          
           
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
                <Link to='/corporate-training'>
                Corporate Training
                </Link>               
                </Nav.Link>
              <Nav.Link>
                <Link to='/govt-training'>
                Govt Training
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/high-edu'>
                Higher Education 
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/software-training'>
                Software Training
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link >
                  Login              
               </Nav.Link>
              <Nav.Link >  
               Register
              </Nav.Link>
               </Nav>
          </Navbar.Collapse>
        </Navbar> 
            </div>
        )
    }


    // write the methods here also. 
}

export default Header;

import React from 'react'
import { LinkContainer,} from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'


const header = () => {
    return (
        <header>
            
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container> 
                  <LinkContainer to='/'> 
                    <Navbar.Brand >Online Shop</Navbar.Brand>
                  </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to='/Cart'> 
        <Nav.Link> <i className='fas fa-shopping-cart'></i>  Cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Login'>
      <Nav.Link> <i className='fas fa-user'></i>  Sign In</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default header

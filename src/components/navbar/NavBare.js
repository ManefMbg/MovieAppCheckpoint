import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form, Button } from 'react-bootstrap';


const NavBare = ({searchByTitle, setSearchByTitle}) => {
  return (
    
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
    <Navbar.Brand href="#"><b>Mousalsel</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <NavDropdown title="Rating" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">1 Star</NavDropdown.Item>
          <NavDropdown.Item href="#action4">2 stars</NavDropdown.Item>
          <NavDropdown.Item href="#action5">3 Stars</NavDropdown.Item>
          <NavDropdown.Item href="#action5">4 Stars</NavDropdown.Item>
          <NavDropdown.Item href="#action5">5 Stars</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchByTitle}
          onChange={e => setSearchByTitle(e.target.value)}
        />
              <Button variant="outline-warning"><b>Search</b></Button>

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar></div>
  )
}

export default NavBare
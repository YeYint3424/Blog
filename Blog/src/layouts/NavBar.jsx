import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0 absolute">
      <Container>
        <Navbar.Brand className="text-xl p-0" href="#home">
          NORDIC ROSE
        </Navbar.Brand>
        <Navbar.Toggle className="outline-none" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-3 p-0'>
          <Nav className='justify-content-end gap-2 p-0' activeKey="/home">
            <Nav.Link href="#home" className='border-bottom border-black'>Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

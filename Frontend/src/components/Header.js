import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='cont'>
          <Navbar.Brand href='/' className='heading'>
            <h2>Recruitment Portal</h2>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="head me-auto">
              <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/about" className="nav-link">About</Nav.Link>
              <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';

function Navbars() {
  const total = 25000;
  const token = true;

  return (

    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
          <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="me-auto " >
            <Nav.Link href="#home" ><Button variant="outline-warning" className="text-white"> 🍕 Home</Button> </Nav.Link>
            {token ? <Nav.Link href="#Profile" ><Button variant="outline-warning" className="text-white">🔒 Profile</Button></Nav.Link>: <Nav.Link href="#Login" ><Button variant="outline-warning" className="text-white">🔒 Login </Button></Nav.Link>}
            {token ? <Nav.Link href="#Logout" ><Button variant="outline-warning" className="text-white">🔒 Logout </Button></Nav.Link> : <Nav.Link href="#Register" ><Button variant="outline-warning" className="text-white">🔒 Register</Button></Nav.Link>}
            
            
          </Nav>
        </Container>
          <Form className="d-flex me-4">
            <Button variant="outline-primary">Total: ${total.toLocaleString()}</Button>
          </Form>


    </Navbar>
  );

}

export default Navbars;
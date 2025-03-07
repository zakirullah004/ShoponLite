import logo from '../images/shopon.pk-1741372708474/Shopon_Logo_F-03__1__3n3z-fn.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar(){
        return (
        
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
              <Navbar.Brand href="#"><img src={logo} width={100} height={40} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className='text-dark '>GIFT CARDS</Nav.Link>
                  <Nav.Link href="#action2" className='text-dark'>MOBILES & TABLETS</Nav.Link>
                  <Nav.Link href="#action2" className='text-dark'>FASHION</Nav.Link>
                  <Nav.Link href="#action2" className='text-dark'>ELECTRONICS</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Products"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }

import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <>
        <Container fluid>
            <Row>
                <Col>
                    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
                        <Container>
                            <Navbar.Brand href="#home">Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
                                <Nav className="fw-bold">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#Projects">Projects</Nav.Link>
                                    <Nav.Link href="#Contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
           
        </Container>
      
    </>
  );
}

export default BasicExample;
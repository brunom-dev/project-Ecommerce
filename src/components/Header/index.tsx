// import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function Header() {
    return(
        <Navbar variant="dark" expand="lg" className="shadow bg-sky-500">
            <Container className='p-4'>
                <Navbar.Brand>
                    <Link 
                        to={"/"} 
                        className='text-white text-decoration-none font-bold text-3xl'
                    >
                        Tech Store
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
                    <Nav className="ms-auto">
                    <Nav.Link href="#home"  className='text-white' style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}>Home</Nav.Link>
                    <Nav.Link href="#about" className='text-white' style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}>Sobre</Nav.Link>
                    <Nav.Link href="#produ" className='text-white' style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}>Produtos</Nav.Link>
                    <Nav.Link href="#conta" className='text-white' style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}>Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>

    )
}



// import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';


export function Header() {
    return(
        <Navbar variant="dark" expand="lg" className="shadow bg-sky-500">
            <Container className='p-4'>
                <Navbar.Brand href="#home">Minha Loja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">Sobre</Nav.Link>
                    <Nav.Link href="#products">Produtos</Nav.Link>
                    <Nav.Link href="#contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}



// import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function Header() {
    return(
<<<<<<< HEAD
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
=======
        <header className="flex justify-evenly py-12 bg-sky-600 text-white">
            <h2 className="font-bold text-3xl">Web Comercio</h2>

            <ul className="flex gap-10 text-2xl font-semibold">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/products"}>Produtos</Link>                
                <a href="#">Contato</a>
            </ul>
        </header>
>>>>>>> dfc5de60722f968c7f3c930d0aae769f6c501c43
    )
}



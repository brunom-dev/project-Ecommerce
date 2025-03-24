import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {

    const [expanded, setExpanded] = useState<boolean>(false);

    return(
        <Navbar variant="dark" expand="lg" className="shadow bg-sky-500" expanded={expanded} onToggle={setExpanded}>
            <Container className='p-4'>
                <Navbar.Brand>
                    <Link 
                        to={"/"} 
                        className='text-white text-decoration-none font-bold text-3xl'
                        onClick={() => setExpanded(false)}
                    >
                        Tech Store
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to={"/"} 
                            className='text-white' 
                            style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link 
                            as={Link} 
                            to={"/cart"} 
                            className='text-white' 
                            style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}
                            onClick={() => setExpanded(false)}
                        >
                            Meu Carrinho
                        </Nav.Link>
                    
                        <Nav.Link 
                            as={Link} 
                            to={"/sobre"} 
                            className='text-white' 
                            style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}
                            onClick={() => setExpanded(false)}
                        >
                            Sobre
                        </Nav.Link>

                        <Nav.Link 
                            as={Link} 
                            to={"/admin"} 
                            className='text-white' 
                            style={{fontWeight: "500", fontSize: "18px", padding: "10px 20px"}}
                            onClick={() => setExpanded(false)}
                        >
                            Acesso Admin
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>

    )
}



import { Link, useLocation } from "react-router-dom";
import { Container,Nav, Navbar } from "react-bootstrap";
function Header() {
    
    const nav = useLocation();
    const active = nav.pathname;
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="shadow" id='Header'>
                <Container>
                <Navbar.Brand as={Nav.Link} href="/">Kirt Bayles<p className="poppins-thin fs-6">IT Graduates </p></Navbar.Brand>
                    <Nav className="ms-auto gap-2 gap-lg-5 navigation">
                        <Link as={Nav.Link} to="/about" className={`text-decoration-none  ${active === '/about' ? 'active' : ''}`}>About</Link>
                        <Link as={Nav.Link} to="/project" className={`text-decoration-none  ${active === '/project' ? 'active' : ''}`}>Project</Link>
                        <Link as={Nav.Link} to="/experience" className={`text-decoration-none  ${active === '/experience' ? 'active' : ''}`}>Experience</Link>
                        <Link as={Nav.Link} to="/contact" className={`text-decoration-none  ${active === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;
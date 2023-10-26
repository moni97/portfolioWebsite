import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    const handleMenuItemClick = (e) => {
        e.stopPropagation();
    }
    return (
        <div className='header'>
            <div className='headerLeft'>
            </div>
            <div className='headerRight'>
                <Navbar expand="lg">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="http://localhost:3000/portfolioWebsite/" onClick={handleMenuItemClick}>Home</Nav.Link>
                            <Nav.Link href="http://localhost:3000/portfolioWebsite/experience">Experience</Nav.Link>
                            {/* <Nav.Link href="http://localhost:3000/portfolioWebsite/research">Research</Nav.Link> */}
                            <Nav.Link href="http://localhost:3000/portfolioWebsite/projects">Projects</Nav.Link>
                            {/* <Nav.Link href="http://localhost:3000/portfolioWebsite/blog">Blog</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
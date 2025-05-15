import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.scss"

const Navigation = ({title, navItems}) => {

    return (
        <>
        
      <Navbar bg="light" data-bs-theme="light" expand="lg" className=''>
        <Container >
          <Navbar.Brand href="#home" className='titleNav '>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id='basic-navbar-nav'/>
          <Nav className="me-auto align-items-center">
            {
                navItems.map(item=> (
            <Nav.Link href={`#${item}`} key={item} className='navItems'>{item}</Nav.Link>

                ))
            }
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default Navigation
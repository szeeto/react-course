import {Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { navLinks } from "../data/index.js"

const NavbarComponents = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary ">
      <Container>
        <NavLink to="/" className="navbar-brand">Patra Course</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map ((item)=>{
              return(
                <div key={item.id} className='nav-links'>
                  <NavLink to={item.path}>{item.text}</NavLink>
                </div>  
              )
            })}
          </Nav>
          <button className="btn btn-primary bg-info text-light"> <a href="#">Join With Us</a></button>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
    </div>
  )
}

export default NavbarComponents

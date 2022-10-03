import React from 'react'

import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";


export default function NavigationBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active ms-3 text-decoration-none" : "text-white ms-3 text-decoration-none");
  return (
    <>
       <Navbar  className='navbarbg' variant="dark">
        <Container>
        <Navbar.Brand><img className='logo' src="https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon-emblema.jpg" alt="logo"/> </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink end className={ setActiveClass } to='/' >Home</NavLink>
            <NavLink className={ setActiveClass } to='/pokemones'>Pokemones</NavLink>
          </Nav>
          
        </Container>
      </Navbar>


      </>    
  )
}

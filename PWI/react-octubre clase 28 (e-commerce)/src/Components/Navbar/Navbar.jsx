import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <h2>Logo</h2>
            <nav>
                <NavLink to={'/contact'}>Contacto</NavLink><br />
                <NavLink to={'/carrito'}>Carrito</NavLink>
                <NavLink to={'/detail'}>Detalle</NavLink> 
            </nav>
        </header>
    )
}

export default Navbar
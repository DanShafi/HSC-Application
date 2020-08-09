import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Sandwich from '../media/HSC-Logo-Original.png'

const Header = () => {
    return (
        <Nav className="navbar-fixed-top">
            <Navbar className="container">
                <Navbar.Brand href="/">
                    <a href="https://hungrysandwich.club">
                        <img className="hsc-logo" src={Sandwich} alt="sandwich-logo" />
                    </a>
                </Navbar.Brand>
            </Navbar>
        </Nav>
    )
}

export default Header

import React from "react"
import { Navbar } from "react-bootstrap"
import fullSandwich from '../media/HSC-Logo-Full.png'

const Header = () => {
    return (
        <Navbar className="container">
            <Navbar.Brand href="/">
                <img className="hsc-logo" src={fullSandwich} alt="sandwich-logo" />
            </Navbar.Brand>
            <Navbar.Text className="ml-auto">
                <a className="mr-3">About</a>
                <a className="mr-3">Contact</a>
                <a>Journal</a>
            </Navbar.Text>
        </Navbar>
    )
}

export default Header

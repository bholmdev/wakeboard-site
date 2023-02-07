import { useState } from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="banner">
                <a href="/"><img src={logo} alt="logo" className="banner-image" /></a>
                <h1 className="banner-title">Wakeboard United</h1>
            </div>
            <Navbar
                dark
                className="custom-navbar"
                stick="top"
                expand="md"
            >   
                <NavbarBrand href="/">
                    <img src={logo} alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-center" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/wakeboard-site">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/directory">
                                <i className="fa fa-list fa-lg" /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <i className="fa fa-info fa-lg" /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-address-card fa-lg" /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;
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
        <Navbar
            dark color="primary"
            stick="top"
            expand="md"
        >
            <NavbarBrand className="ms-5" href="/">
                <img src={logo} alt="logo" className="float-start" />
                <h1 className="mt-2">Wakeboard United</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={!menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
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
                            <i className="fa fa-address fa-lg" /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
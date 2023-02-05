import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/img/logo.jpg";

const Header = () => {
    return (
        <Navbar dark color="primary" stick="top" expand="md">
            <NavbarBrand href="/">
                <img src={logo} alt="logo" />
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;
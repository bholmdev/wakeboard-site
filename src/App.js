import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import logo from "./app/assets/img/logo.jpg";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" stick="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      You Can Wakeboard Too!
    </div>
  );
}

export default App;

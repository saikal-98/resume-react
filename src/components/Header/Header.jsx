import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "gray", listStyleType: "none" }}>
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              width={30}
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt=""
            />
            <NavbarBrand>About Me</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/skills">
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135729.png"
              alt=""
            />
            <NavbarBrand>Skills</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/education">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/5999/5999928.png"
              alt=""
            />
            <NavbarBrand>Education</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contacts">
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/512/3059/3059408.png"
              alt=""
            />
            <NavbarBrand>Contacts</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/hobbies">
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/512/6009/6009323.png"
              alt=""
            />
            <NavbarBrand>Hobbies</NavbarBrand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

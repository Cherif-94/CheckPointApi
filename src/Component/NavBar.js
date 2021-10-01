import { MDBIcon } from "mdbreact";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Cocktails <MDBIcon icon="glass-cheers" />
          </Navbar.Brand>
          <Nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "23%",
              marginLeft: "27%",
            }}
            className="mr-auto"
          >
            <Link
              style={{ color: "white" }}
              exact
              to="/"
              className="appLink"
              activeClassName="activeLink"
            >
              Home
            </Link>
            <Link
              style={{ color: "white" }}
              to="/Cocktails"
              className="appLink"
              activeClassName="activeLink"
            >
              Cocktails
            </Link>
            <Link
              style={{ color: "white" }}
              to="/Admin"
              className="appLink"
              activeClassName="activeLink"
            >
              Admin
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

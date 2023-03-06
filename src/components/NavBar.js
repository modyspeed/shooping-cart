import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoopingCart } from "./shoopingContext/Context";

export const NavBar = () => {
  const { handleShow ,cartQuantity} = useShoopingCart();
  return (
    <Navbar className=" shadow-sm mb-4 " variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="outline-dark"
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px", position: "relative" }}
            onClick={handleShow}
          >
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faCartPlus} />
            <div
              className="rounded-circle d-flex justify-content-center align-items-center bg-danger text-white"
              style={{
                position: "absolute",
                bottom: 0,
                width: "25px",
                height: "25px",
                transform: "translate(25px,10px)",
              }}
            >
            {cartQuantity}
            </div>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

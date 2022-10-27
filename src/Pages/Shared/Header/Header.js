import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Image } from "react-bootstrap";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Card.Img
          variant="top"
          height="80px"
          weight="120px"
          src="https://www.rajeshgarapati.com/wp-content/uploads/2020/02/1489214473_VJzBfR_Web-tech.jpg"
        />
        <Navbar.Brand>
          <Link to="/home">Web-Technology</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="/image">
              {user.photoURL ? (
                <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

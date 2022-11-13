import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { MDBSwitch } from "mdb-react-ui-kit";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="d-flex">
          <Nav.Link href="/">
            <Image
              width="40px"
              src="https://www.rajeshgarapati.com/wp-content/uploads/2020/02/1489214473_VJzBfR_Web-tech.jpg"
            ></Image>
          </Nav.Link>

          <Link to="/">Web-Technology</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <MDBSwitch
              id="flexSwitchCheckDefault"
              label="Default switch checkbox input"
            />
          </Nav>
          <Nav>
            <Nav.Link href="">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant="info" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-2">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="">
              {user?.photoURL ? (
                <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src={user?.photoURL}
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

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const auth = getAuth();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        // setUser(user)
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h2>All Course: {courses.length}</h2>
      <div>
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </p>
        ))}
      </div>

      {/* react bootstrap */}
      <div>
        <ButtonGroup vertical>
          <Button
            onClick={handleGithubSignIn}
            className="mb-2"
            variant="outline-primary"
          >
            <FaGithub></FaGithub> Login with Github
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            className="mb-2"
            variant="outline-success"
          >
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          {/* <Button className="mb-2" variant="outline-warning">
            <FaFacebook></FaFacebook> Login with Facebook
          </Button> */}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default LeftSideNav;

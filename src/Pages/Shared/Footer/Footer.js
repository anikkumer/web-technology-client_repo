import React from "react";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className="text-center mt-2">
      <Card.Header>Web Technology Learning Courses</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            βIn learning you will teach, and in teaching you will learn.β β Phil
            Collins
          </p>
          <footer className="blockquote-footer">
            Copyright @2022 web_technology.com
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Footer;

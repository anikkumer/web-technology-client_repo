import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      );
    </div>
  );
};

export default Blog;

import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. What is Web Technology?</Accordion.Header>
          <Accordion.Body>
            Web Technology refers to the various tools and techniques that are
            utilized in the process of communication between different types of
            devices over the internet. A web browser is used to access web
            pages. Web browsers can be defined as programs that display text,
            data, pictures, animation, and video on the Internet.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Why should we learn web technology?
          </Accordion.Header>
          <Accordion.Body>
            Web development gives you the opportunity to express yourself
            creatively on the internet. If you have an idea you would like to
            try as you discover your web dev skills, try it out. Web dev is a
            fun, creative experience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            3. Is web development useful in future?
          </Accordion.Header>
          <Accordion.Body>
            The job outlook for Web Developers as very positive because Web
            Developers are in high demand across a variety of industries, and a
            worldwide gap in software and web development skills has most
            observers forecasting high demand well into the future.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pdf from "react-to-pdf";

const News = () => {
  const ref = React.createRef();

  const news = useLoaderData();
  const { id, name, details, picture } = news;
  return (
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <div ref={ref}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </div>
        <Link to={`/checkout/${id}`}>
          <Button variant="primary">Get Premium Access</Button>
        </Link>
        <Pdf targetRef={ref} filename="Details.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Download Details</Button>}
        </Pdf>
      </Card.Body>
    </Card>
  );
};

export default News;

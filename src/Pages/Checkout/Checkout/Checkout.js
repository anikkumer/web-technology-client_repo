import React from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  const { name, details, picture, fee } = checkout;
  console.log(checkout);
  return (
    <div>
      <Card className="mb-5"></Card>
      <h1>
        <Card.Header className="text-center">{name}</Card.Header>
      </h1>
      <Card.Body>
        <Card.Img variant="top" src={picture} />
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <div className="text-center">
        <h2>{fee}</h2>
      </div>
    </div>
  );
};

export default Checkout;

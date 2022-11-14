import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = ({ news }) => {
  const { id, name, picture, fee } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="text-center">{name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={picture} />
      </Card.Body>
      <div>
        <FaMoneyBillAlt className="text-warning"></FaMoneyBillAlt>
        <span>{fee}</span>
      </div>
      <Button>
        <Link to={`/checkout/${id}`}>Get Premium Access</Link>
      </Button>
    </Card>
  );
};

export default Checkout;

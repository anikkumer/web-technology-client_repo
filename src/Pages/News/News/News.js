import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  const { name, details, picture, id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/courses`}>
          <Button variant="primary">All news in this courses</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesCard = ({ news }) => {
  const { id, name, picture, balance, details, subs, index } = news;
  console.log(news);
  return (
    <Card className="">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={picture} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + "..."}
              <Link to={`/news/${id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CoursesCard;

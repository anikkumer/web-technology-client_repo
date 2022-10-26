import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar, FaMoneyBillAlt } from "react-icons/fa";

const CoursesCard = ({ news }) => {
  const { id, name, picture, fee, details, subs, index } = news;
  console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="text-center">{name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={picture} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + "..."}
              <Link to={`/courses/${id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{subs}</span>
        </div>
        <div>
          <FaMoneyBillAlt className="text-warning"></FaMoneyBillAlt>
          <span>{fee}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CoursesCard;

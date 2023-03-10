import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://web-technology-server.vercel.app/news-categories")
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
    </div>
  );
};

export default LeftSideNav;

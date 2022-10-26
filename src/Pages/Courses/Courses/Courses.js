import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>This is Courses has news: {news?.length}</h2>
    </div>
  );
};

export default Courses;

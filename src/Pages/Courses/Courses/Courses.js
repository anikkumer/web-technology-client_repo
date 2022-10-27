import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../../Shared/CoursesCard/CoursesCard";

const Courses = () => {
  const courseNews = useLoaderData();
  return (
    <div>
      {/* <h2>This is Courses has news: {courseNews?.length}</h2> */}
      {courseNews.map((news) => (
        <CoursesCard key={news.id} news={news}></CoursesCard>
      ))}
    </div>
  );
};

export default Courses;

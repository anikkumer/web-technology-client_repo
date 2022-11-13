import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../../Shared/CoursesCard/CoursesCard";

const Home = () => {
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
  const allNews = useLoaderData();
  return (
    <div>
      <h2>Courses</h2>
      {allNews.map((news) => (
        <CoursesCard key={news.id} news={news}></CoursesCard>
      ))}
    </div>
  );
};

export default Home;

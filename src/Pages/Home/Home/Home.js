import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../../Shared/CoursesCard/CoursesCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {/* <h2>Web Technology: {allNews.length}</h2> */}
      {allNews.map((news) => (
        <CoursesCard key={news.id} news={news}></CoursesCard>
      ))}
    </div>
  );
};

export default Home;

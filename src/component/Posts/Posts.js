import React from "react";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h4>There are a lot of posts here</h4>
      {}
    </div>
  );
};

export default Posts;

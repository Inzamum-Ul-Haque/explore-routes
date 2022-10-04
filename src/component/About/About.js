import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const About = () => {
  const users = useLoaderData();

  return (
    <div>
      <h4>This is a very collaborate about page. Length: {users.length}</h4>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default About;

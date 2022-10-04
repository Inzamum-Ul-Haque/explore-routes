import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email } = user;

  return (
    <div>
      <h3>Name: {name}</h3>
      <h5>Email: {email}</h5>
      <p>
        User: <Link to={`/friend/${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default User;

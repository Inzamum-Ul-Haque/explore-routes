import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();

  return (
    <div>
      <h2>Person Name: {friend.name}</h2>
      <p>Call: {friend.phone}</p>
      <h2>Everything you need to know about this person is here</h2>
    </div>
  );
};

export default FriendDetail;

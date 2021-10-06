import React from "react";

function Card({ id, fullName, email }) {
  return (
    <div id={id} className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="profile"
        src={`https://robohash.org/${fullName}?size=150x150`}
      />
      <h2>{fullName}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;

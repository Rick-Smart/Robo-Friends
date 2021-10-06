import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  // mapping through the array and returing a new card component for each robot
  const cardArray = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        fullName={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{cardArray}</div>;
}

export default CardList;

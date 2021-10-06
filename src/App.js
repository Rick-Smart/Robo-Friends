import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import "./utility/app.css";

function App() {
  let [robotArray, setRobotArray] = useState([]);
  let [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobotArray(users);
      });
  }, []);

  function onSearchChange(e) {
    e.preventDefault();
    setSearchField(e.target.value);
  }

  let filteredRobots = robotArray.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robotArray.length) {
    return (
      <div className="tc">
        <h1 className="f1">Loading...</h1>
      </div>
    );
  } else
    return (
      <div className="tc">
        <h1 className="f1">Robo-Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}

export default App;

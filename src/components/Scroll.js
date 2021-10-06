import React from "react";
import "../utility/scroll.css";

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid #0ccac4",
        height: "500px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;

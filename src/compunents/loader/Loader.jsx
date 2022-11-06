import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="Loading">
      <div class="ring">
        Loading
        <span className="span"></span>
      </div>
    </div>
  );
}

export default Loader;
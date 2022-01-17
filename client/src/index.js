import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

function Index() {
  return <Router />;
}

ReactDOM.render(<Index />, document.getElementById("root"));

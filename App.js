import React from "react";
import  ReactDOM  from "react-dom";

const parent = React.createElement("div", {id:"parent"}, [React.createElement("h1", 
{id:"child"}, "Hello This is Child"), 
React.createElement("h2", {id:"child"}, "Hello This is Child")]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(parent);

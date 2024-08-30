import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement("div",{id:"parent"},React.createElement("p",{},"ddd is para"));
console.log(this);


root.render(element)
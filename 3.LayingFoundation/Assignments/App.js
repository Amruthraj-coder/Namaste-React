import React from "react";
import ReactDOM from "react-dom/client"
import Title from "./Title.js"
import Header from "./Header.js"
const root = ReactDOM.createRoot(document.getElementById("root"));
// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX
    
const header = React.createElement("div",{className:"title"},React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag"),React.createElement("h3",{},"This is h3 tag"))

const header2 =(<div className="title"><h1>this is h1 tag</h1><h2>This is h2 tag</h2><h3>this is h3 tag</h3></div>)
root.render(<Title name="amruth"/>)


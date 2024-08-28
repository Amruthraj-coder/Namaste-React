const root = ReactDOM.createRoot(document.getElementById("root"))

const h1 =React.createElement("h1",{},"this is H1 tag");
const h2 =React.createElement("h2",{},"this is H2 tag");

const child1 = React.createElement("div",{id:"child1"},[h1,h2])
const child2 = React.createElement("div",{id:"child2"},[h1,h2])
const parent = React.createElement("div",{id:"parent"},[child1,child2]);

root.render(parent)
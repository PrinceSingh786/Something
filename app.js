const piece = React.createElement("div", {
    class: "abc"
    , naam: "prince"
}, [React.createElement("div",{class:"a"},[React.createElement("h2",{class:"a"},"I am a heading"),React.createElement("h3",{id:"hh"},"another heading")]),
React.createElement("div",{class:"a"},[React.createElement("h2",{class:"a"},"I am a  second heading"),React.createElement("h3",{id:"hh"},"another heading")])]);
const dabba = ReactDOM.createRoot(document.getElementById("dabba"));
dabba.render(piece);

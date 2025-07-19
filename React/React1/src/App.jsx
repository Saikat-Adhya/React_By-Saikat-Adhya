import React from "react";
import Card from "./components/Card";

const App = () => {
  const [text, setText] = React.useState(true);
  const handleChange = ()=> {
    setText(!text);
  };
  const [color, setColor] = React.useState("yellow");
  return (
    <div style={{ backgroundColor: color }}>
      <h1>
        Hello Bro
        <Card name="Saikat" adj="beautiful" />
        <Card name="Adhya" adj="ugly">
          <h1>{text?"jio":"ok"}</h1>
          <button onClick={handleChange}>change me re</button>
        </Card>
      </h1>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("red")}>red</button>
    </div>
  );
};

export default App;

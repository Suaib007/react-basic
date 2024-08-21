import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "jhon",
    age: 25,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Blacksmith" btnText="click me" />
      <Card username="Mainuddin" btnText="visit me" />
    </>
  );
}

export default App;

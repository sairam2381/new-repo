import { useState } from "react";
import HelloWorld from "./hello-world";
import HelloChennai from "./hello-chennai";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloChennai />
    </div>
  );
}

export default App;

import { useState } from "react";
import HelloWorld from "./hello-world";
import HelloChennai from "./hello-chennai";
import MiComponent from "./mi/mi-component";
import BoxComponent from "./boxes/boxes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HelloWorld />
      <HelloWorld />
      <HelloChennai />
      <MiComponent /> */}
      <BoxComponent />
    </div>
  );
}

export default App;

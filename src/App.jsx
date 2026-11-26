import { useState } from "react";
import HelloWorld from "./hello-world";
import HelloChennai from "./hello-chennai";
import MiComponent from "./mi/mi-component";
import BoxComponent from "./boxes/boxes";
import SymbolOfExcellence from "./symbol-of-excellence/symbol-of-excellence";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HelloWorld />
      <HelloWorld />
      <HelloChennai />
      <MiComponent /> */}
      {/* <BoxComponent /> */}
      <SymbolOfExcellence />
    </div>
  );
}

export default App;

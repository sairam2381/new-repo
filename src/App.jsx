import { useState } from "react";
import HelloWorld from "./hello-world";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

export default App;

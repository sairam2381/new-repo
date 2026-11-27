import { useState } from "react";
import HelloWorld from "./hello-world";
import HelloChennai from "./hello-chennai";
import MiComponent from "./mi/mi-component";
import BoxComponent from "./boxes/boxes";
import SymbolOfExcellence from "./symbol-of-excellence/symbol-of-excellence";
import HelloComponent from "./props/hello-component";
import { BoxComponentData, symbolOfExcellence } from "./data";
import { toast } from "react-toastify";
import UsestateComponent from "./usestate/usestate-component";
import UseStateTwo from "./usestate/usestate-2";
import UseEffectComponent from "./useEffect/useEffect-component";
import Fetchapi from "./fetch-api/fetch-api";
function App() {
  const [count, setCount] = useState(0);
  const triggerFunction = () => {
    // toast.success("Login successful!");
    toast.error("Login successful!");
  };
  return (
    <div>
      {/* <HelloWorld />
      <HelloWorld />
      <HelloChennai />
      <MiComponent /> */}
      {/* <BoxComponent data={BoxComponentData} />
      <SymbolOfExcellence data={symbolOfExcellence} />
      <SymbolOfExcellence /> */}
      {/* <HelloComponent data={1} color="Red" />
      <HelloComponent data={100} />
      <HelloComponent data="Sreesairam" color="White" /> */}
      {/* <UsestateComponent /> */}
      {/* <UseStateTwo /> */}
      {/* <UseEffectComponent /> */}
      <Fetchapi />
    </div>
  );
}

export default App;

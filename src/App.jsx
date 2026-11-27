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
import { Routes, Route } from "react-router-dom";
import Fetchapi from "./fetch-api/fetch-api";
import RouteOne from "./routing/route-1";
import RouteTwo from "./routing/route-2";
import RouteThree from "./routing/route-3";
import RouteFour from "./routing/route-4";
import HomePage from "./routing/home-page";
import NotFound from "./routing/not-found";
function App() {
  const [count, setCount] = useState(0);
  const triggerFunction = () => {
    // toast.success("Login successful!");
    toast.error("Login successful!");
  };
  return (
    <div>
      <Routes>
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
        {/* <Fetchapi /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<RouteOne />}>
          <Route path="second" element={<RouteTwo />} />
          <Route path="three" element={<RouteThree />} />
        </Route>
        <Route path="/four" element={<RouteFour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

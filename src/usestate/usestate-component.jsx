import react, { useState } from "react";
import { UsestateStyle, UsestateStyleOne } from "./usestate-style";
const UsestateComponent = () => {
  // const a = 30;
  const [count, setCount] = useState(0);
  return (
    <UsestateStyle>
      {/* <h1 className="element">Hello world</h1>
      <UsestateStyleOne>
        <h1 className="element">HELLO CSK</h1>
      </UsestateStyleOne> */}
      <h1>Value of A is {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Sub
      </button>
    </UsestateStyle>
  );
};
export default UsestateComponent;

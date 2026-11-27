import react, { useState } from "react";
import { toast } from "react-toastify";
import { UsestateStyle, UsestateStyleOne } from "./usestate-style";
const UsestateComponent = () => {
  // const a = 30;
  const [count, setCount] = useState(0);
  const incrementFunction = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      toast.error("Sorry I cannot increment this further");
    }
  };
  const decrementFunction = () => {
    if (count > -10) {
      setCount(count - 1);
    } else {
      toast.error("Sorry I cannot decrement this further");
    }
  };
  return (
    <UsestateStyle>
      {/* <h1 className="element">Hello world</h1>
      <UsestateStyleOne>
        <h1 className="element">HELLO CSK</h1>
      </UsestateStyleOne> */}
      <h1>Value of A is {count}</h1>
      <button onClick={incrementFunction}>Add</button>
      <button onClick={decrementFunction}>Sub</button>
    </UsestateStyle>
  );
};
export default UsestateComponent;

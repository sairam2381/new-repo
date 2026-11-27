import react, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("Hello world");
  }, [count, data]);
  return (
    <div>
      count:{count}
      <button
        onClick={() => {
          // setCount(count - 1);
          setData(data - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          // setCount(count + 1);
          setData(data + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default UseEffectComponent;

import react, { useState } from "react";
const UseStateTwo = () => {
  const [data, setData] = useState(null);
  const submitFunction = (e) => {
    e.preventDefault();
    console.log("Data:", data);
  };
  const typeFunction = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitFunction}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={typeFunction}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseStateTwo;

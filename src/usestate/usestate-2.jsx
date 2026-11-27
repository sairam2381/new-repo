import react, { useState } from "react";
const UseStateTwo = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const submitFunction = (e) => {
    e.preventDefault();
    console.log("Data:", data);
  };
  const typeFunction = (e) => {
    // console.log("Data:", e.target.value);
    // console.log("Value:", e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log("The changing data:", data);
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
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={typeFunction}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseStateTwo;

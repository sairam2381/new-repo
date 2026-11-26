import react from "react";
const HelloComponent = (props) => {
  return (
    <div>
      <h1>Hello world{props.data}</h1>
      <h2>
        Hello Color:
        {props.color != undefined ? props.color : <div>No color</div>}
      </h2>
    </div>
  );
};
export default HelloComponent;

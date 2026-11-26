import react from "react";
import "./boxes.css";
const BoxComponent = (props) => {
  return (
    <div className="parent">
      {props.data.map((item, index) => {
        return (
          <div className="child">
            <div className="value">{item.number}</div>{" "}
            <div className="detail">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default BoxComponent;

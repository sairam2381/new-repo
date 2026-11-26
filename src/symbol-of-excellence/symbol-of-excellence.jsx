import react from "react";
import "./symbol-of-excellence.css";
const SymbolOfExcellence = (props) => {
  console.log("The data:", props?.data?.subTitle);
  return (
    <div className="symbol_parent">
      <h1 className="symbol_heading">{props?.data?.title}</h1>
      <div className="symbol_para">{props?.data?.subTitle}</div>
      <div className="symbol_parent_two">
        <div className="symbol_parent_child">
          <div className="symbol_parent_heading">Our Vision</div>
          <div className="symbol_parent_subheading">{props?.data?.point1}</div>
        </div>
        <div className="divider"></div>
        <div className="symbol_parent_child">
          <div className="symbol_parent_heading_two">Our Mission</div>
          <div className="symbol_parent_subheading">{props?.data?.point2}</div>
        </div>
      </div>
    </div>
  );
};
export default SymbolOfExcellence;

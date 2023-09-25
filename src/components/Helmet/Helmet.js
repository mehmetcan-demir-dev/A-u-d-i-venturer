import React from "react";
import "./helmet.css";
const Helmet = (props) => {
  document.title = "A-u-d-i-venturer -" + props.title;

  return (
    <>
      <div className="w-100">{props.children}</div>
    </>
  );
};

export default Helmet;

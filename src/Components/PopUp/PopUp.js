import React from "react";
import "./PopUp.css";

function PopUp({ popUpClassName, headingClassName, serverName }) {
  return (
    <>
      <div className={popUpClassName}>
        <h4 className={headingClassName}>{serverName}</h4>
      </div>
    </>
  );
}

export default PopUp;

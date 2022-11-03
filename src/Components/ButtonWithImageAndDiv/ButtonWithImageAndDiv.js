import React from "react";
import "./ButtonWithImageAndDiv.css";

import ArrowRight from "./../../Assets/Logos/arrow-right.svg";

function ButtonWithImageAndDiv({
  img,
  className,
  imgClassName,
  text1,
  text1ClassName,
  text2ClassName,
  onClick,
  text2,
}) {
  return (
    <>
      <button onClick={onClick} className={className}>
        <img src={img} alt="" className={imgClassName} />
        {text2 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className={text1ClassName}>{text1}</h2>
            <div className={text2ClassName}>{text2}</div>
          </div>
        ) : (
          <div className={text1ClassName}>{text1}</div>
        )}
        <img className="buttonArrow" src={ArrowRight} alt="arrow" />
      </button>
    </>
  );
}

export default ButtonWithImageAndDiv;

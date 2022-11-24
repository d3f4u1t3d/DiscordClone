import React from "react";
import "./ServerButton.css";
import PopUp from "../PopUp/PopUp";

export default function ServerButton({
  svg,
  img,
  className,
  imgClassName,
  alt,
  onClick,
}) {
  return (
    <>
      <div onClick={onClick} className={className}>
        {console.log(img)}
        {/* <img src={img} className={imgClassName} alt={alt} /> */}
        {!svg ? <img src={img} className={imgClassName} alt={alt} /> : svg}
        {/* <PopUp
          popUpClassName="servername_popup"
          headingClassName="servername"
          serverName={alt}
        /> */}
      </div>
    </>
  );
}

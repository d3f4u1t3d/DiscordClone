import { useState } from "react";
import React from "react";
import "./SelectDropDown.css";

function DropDown({ selected, setSelected, option, defaut }) {
  const [isActive, setIsActive] = useState(false);
  const options = option;

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected == "" ? defaut : selected}
        <svg
          style={{ marginLeft: "10px" }}
          fill="#b9bbbe"
          xmlns="http://www.w3.org/2000/svg"
          height={"14px"}
          width={"14px"}
          viewBox="0 0 448 512"
        >
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {" "}
              {typeof option == "number" ? (option = option + 1) : option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;

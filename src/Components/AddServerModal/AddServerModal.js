import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./AddServerModal.css";
import axios from "axios";
import ButtonWithImageAndDiv from "../ButtonWithImageAndDiv/ButtonWithImageAndDiv";
import ServerTemplate0 from "./../../Assets/Logos/servertemplate0.svg";
import ServerTemplate1 from "./../../Assets/Logos/servertemplate1.svg";
import ServerTemplate2 from "./../../Assets/Logos/servertemplate2.svg";
import ServerTemplate3 from "./../../Assets/Logos/servertemplate3.svg";
import ServerTemplate4 from "./../../Assets/Logos/servertemplate4.svg";
import ServerTemplate5 from "./../../Assets/Logos/servertemplate5.svg";
import ServerTemplate6 from "./../../Assets/Logos/servertemplate6.svg";
import Button from "../Button/Button";

const AddServerModal = forwardRef((props, ref) => {
  const innerRef = useRef();
  useImperativeHandle(ref, () => innerRef.current);

  return (
    <div className="overlay" ref={innerRef}>
      <div className="modalContainer">
        <div className="modalHeader">
          <h1 className="h13">Create a Server</h1>
          <p className="modalsubtext">
            Your server is where you and your friends hang out. Make yours and
            start talking
          </p>
          <Button
            onClick={() => innerRef.current.classList.remove("show")}
            value={
              <svg>
                <path
                  fill="currentColor"
                  d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                ></path>
              </svg>
            }
            className="closebutton"
          />
        </div>
        <div className="buttonscontainer">
          <ButtonWithImageAndDiv
            onClick={props.onClick1}
            className="photobutton"
            img={ServerTemplate0}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="Create Your Own"
          />
          <div className="modaltext">start from a template</div>
          <ButtonWithImageAndDiv
            className="photobutton"
            onClick={props.onClick1}
            img={ServerTemplate1}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="Gaming"
          />
          <ButtonWithImageAndDiv
            className="photobutton"
            onClick={props.onClick1}
            img={ServerTemplate2}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="School Club"
          />
          <ButtonWithImageAndDiv
            className="photobutton"
            onClick={props.onClick1}
            img={ServerTemplate3}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="Study Group"
          />
          <ButtonWithImageAndDiv
            className="photobutton"
            onClick={props.onClick1}
            img={ServerTemplate4}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="Friends"
          />
          <ButtonWithImageAndDiv
            img={ServerTemplate5}
            className="photobutton"
            onClick={props.onClick1}
            imgClassName="iconservercreate"
            text1ClassName="buttonText"
            text1="Artists & Creators"
          />
          <ButtonWithImageAndDiv
            img={ServerTemplate6}
            className="photobutton"
            onClick={props.onClick1}
            imgClassName="iconservercreate"
            text1="Local Community"
            text1ClassName="buttonText"
          />
        </div>
        <div className="JoinContainer">
          <h2 className="h23">Already have an invite?</h2>
          <Button
            className="JoinServer"
            value="Join a Server"
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
});
export default AddServerModal;

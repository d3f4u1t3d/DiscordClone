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
  // axios.post('http://192.168.1.69:7070/server/addserver',{
  //   name:"server 24"
  // },{
  //  headers:{ "Authorization":`Bearer ${sessionStorage.getItem('tokenKey')}`}
  // }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
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
          <ButtonWithImageAndDiv img={ServerTemplate0} text="Create Your Own" />
          <div className="modaltext">start from a template</div>
          <ButtonWithImageAndDiv img={ServerTemplate1} text="Gaming" />
          <ButtonWithImageAndDiv img={ServerTemplate2} text="School Club" />
          <ButtonWithImageAndDiv img={ServerTemplate3} text="Study Group" />
          <ButtonWithImageAndDiv img={ServerTemplate4} text="Friends" />
          <ButtonWithImageAndDiv
            img={ServerTemplate5}
            text="Artists & Creators"
          />
          <ButtonWithImageAndDiv img={ServerTemplate6} text="Local Community" />
        </div>
        <div className="JoinContainer">
          <h2 className="h23">Already have an invite?</h2>
          <Button className="JoinServer" value="Join a Server" />
        </div>
      </div>
    </div>
  );
});
export default AddServerModal;

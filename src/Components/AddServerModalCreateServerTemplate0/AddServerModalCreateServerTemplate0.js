import React from "react";
import "./AddServerModalCreateServerTemplate0.css";

import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import ButtonWithImageAndDiv from "../ButtonWithImageAndDiv/ButtonWithImageAndDiv";
import clubserver from "./../../Assets/Logos/clubserver.svg";
import friendsserver from "./../../Assets/Logos/friendsserver.svg";
import { useRef, useEffect } from "react";

function AddServerModalCreateServerTemplate0({
  setsertemp,
  addServerModalRef,
  onClick,
}) {
  const sertemp = useRef();
  useEffect(() => {
    setsertemp(sertemp);
  }, []);
  return (
    <>
      <div className="overlay" ref={sertemp}>
        <div className="modalContainer3">
          <div className="modalHeader3">
            <h1 className="h133">Tell us more about your server</h1>
            <p className="modalsubtext3">
              In order to help with your setup, is your new server for just a
              few friends or a larger community?
            </p>
            <Button
              onClick={() => sertemp.current.classList.remove("show")}
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
          <div className="secondarycontainer2">
            <ButtonWithImageAndDiv
              onClick={onClick}
              img={clubserver}
              imgClassName="img2"
              text1="For a club or community"
              text1ClassName="buttonText1"
              className="photobutton3"
            />
            <ButtonWithImageAndDiv
              img={friendsserver}
              onClick={onClick}
              imgClassName="img2"
              text1="For me and my friends"
              text1ClassName="buttonText1"
              className="photobutton3"
            />
            <div className="textbox">
              <p>
                Not sure? You can <a onClick={onClick}> skip this question</a>{" "}
                for now.
              </p>
            </div>
          </div>
          <div className="JoinContainer3">
            <Button
              onClick={() => {
                sertemp.current.classList.remove("show");
                addServerModalRef.current.classList.add("show");
              }}
              value="Back"
              className="noborder"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddServerModalCreateServerTemplate0;

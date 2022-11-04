import React, { useRef } from "react";
import "./AddServerModalJoin.css";
import ButtonWithImageAndDiv from "../ButtonWithImageAndDiv/ButtonWithImageAndDiv";
import InputBox from "../InputBox/InputBox";
import JoinServer from "./../../Assets/Logos/joinserver.svg";
import Button from "../Button/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function AddServerModalJoin({ setJoinRef, addServerModalRef }) {
  const [formData, setFormData] = useState({ link: "" });
  const joinRef = useRef();

  useEffect(() => {
    setJoinRef(joinRef);
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData.link);
    axios
      .post(
        `http://192.168.1.69:7070/user/joinserver/${formData.link}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("tokenKey")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        joinRef.current.classList.remove("show");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="overlay" ref={joinRef}>
        <div className="modalContainer2">
          <div className="modalHeader2">
            <h1 className="h132">Join a Server</h1>
            <p className="modalsubtext2">
              Enter an invite below to join an existing server
            </p>
            <Button
              onClick={() => joinRef.current.classList.remove("show")}
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
          <div className="secondarycontainer">
            <div className="modaltext2">invite link</div>
            <form action="POST">
              <InputBox
                onChange={handleChange}
                type="text"
                name="link"
                value={formData.link}
                className="JoinServer2"
                placeholder="https://disccord.gg/hTKzmak"
              />
            </form>
            <div className="modaltext2">invites should look like</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <div className="sampleLink">hTKzmak</div>
              <div className="sampleLink">https://disccord.gg/hTKzmak</div>
              <div className="sampleLink">https://discord.gg/cool-people</div>
            </div>
            <ButtonWithImageAndDiv
              img={JoinServer}
              imgClassName="img"
              text1="Don't have an invite?"
              text1ClassName="buttonText1"
              className="photobutton2"
              text2="Check out public communities in Server Discovery"
              text2ClassName="smallText"
            />
          </div>
          <div className="JoinContainer2">
            <Button
              value="Back"
              className="noborder"
              onClick={() => {
                joinRef.current.classList.remove("show");
                addServerModalRef.current.classList.add("show");
              }}
            />
            <Button
              className="JoinServer23"
              value="Join Server"
              onClick={handleForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServerModalJoin;

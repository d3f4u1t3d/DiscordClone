import React from "react";
import Button from "../../Components/Button/Button";
import GuildsContainer from "../../Components/GuildsContainer/GuildsContainer";
import MainContainer from "../../Components/MainContainer/MainContainer";
import SideBar from "../../Components/SideBar/SideBar";
import "./OverView.css";

function OverView(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100%",
      }}
    >
      <GuildsContainer addServerModalRef={props.addServerModalRef} />
      <div className="content">
        <SideBar type={2} />
        <MainContainer type={1} />
      </div>
    </div>
  );
}

export default OverView;

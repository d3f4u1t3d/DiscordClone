import React from "react";
import "./GuildsDiscovery.css";
import GuildsContainer from "./../../Components/GuildsContainer/GuildsContainer.js";
import SideBar from "./../../Components/SideBar/SideBar.js";

function GuildsDiscovery() {
  return (
    <div style={{ display: "flex" }}>
      <GuildsContainer />
      <SideBar type={3} />
    </div>
  );
}

export default GuildsDiscovery;

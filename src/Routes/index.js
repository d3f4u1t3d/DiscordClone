import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import GuildsDiscovery from "../Pages/GuildsDiscovery/GuildsDiscovery";
import LoadingScreen from "../Pages/LoadingScreen/LoadingScreen";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";

function Router() {
  // const route = ['/login','/signup']
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
        <Route path="/app" element={<LoadingScreen />} />
        <Route path="/guilds-discovery" element={<GuildsDiscovery />} />

        {/* {
              route.map((val,index)=>{
                return (<Route key={index} path={val} element={<Homepage />} />)
              })
            } */}
      </Routes>
    </>
  );
}

export default Router;

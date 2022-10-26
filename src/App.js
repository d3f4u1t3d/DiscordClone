
// import Home from "./Pages/HomePage/Home";
// import Login from "./Pages/Login/Login";
// import ServerButton from "./Components/ServerButton/ServerButton";
import DropDown from "./Components/DropDown/DropDown";
import OverView from "./Pages/Overview/OverView";
import { useState } from "react";
import Register from "./Pages/Register/Register";
// import LoadingScreen from "./Pages/LoadingScreen/LoadingScreen";
import {date} from './../src/Assets/MockData/mockdata'

function App() {
  const [selected,setSelected] = useState("");
  return (
    <div style={{display:"flex",flex:1}} >
      {/* <Home/> */}
      <OverView/>
      {/* <LoadingScreen/> */}
      

    </div>
  );
}

export default App;

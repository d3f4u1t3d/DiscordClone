// import Home from "./Pages/HomePage/Home";
// import Login from "./Pages/Login/Login";
// import ServerButton from "./Components/ServerButton/ServerButton";
import DropDown from "./Components/DropDown/DropDown";
import OverView from "./Pages/Overview/OverView";
import { useState } from "react";
import Register from "./Pages/Register/Register";
import LoadingScreen from "./Pages/LoadingScreen/LoadingScreen";
import { date } from "./../src/Assets/MockData/mockdata";
import AddServerModal from "./Components/AddServerModal/AddServerModal";
import { useRef } from "react";
import AddServerModalJoin from "./Components/AddServerModalJoin/AddServerModalJoin";

function App() {
  const [selected, setSelected] = useState("");
  const [joinRef, setJoinRef] = useState("");
  const addServerModalRef = useRef();
  function handleRef() {
    addServerModalRef.current.classList.remove("show");
    joinRef.current.classList.add("show");
  }
  return (
    <div style={{ display: "flex", flex: 1 }}>
      {/* <Home/> */}
      <OverView addServerModalRef={addServerModalRef} />
      {/* <AddServerModal /> */}
      {/* test */}
      {/* <LoadingScreen /> */}
      <AddServerModalJoin
        setJoinRef={setJoinRef}
        addServerModalRef={addServerModalRef}
      />
      <AddServerModal ref={addServerModalRef} onClick={handleRef} />
    </div>
  );
}

export default App;

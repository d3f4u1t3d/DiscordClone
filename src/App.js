// import Home from "./Pages/HomePage/Home";
// import Login from "./Pages/Login/Login";
// import ServerButton from "./Components/ServerButton/ServerButton";
import OverView from "./Pages/Overview/OverView";
import { useState, useRef } from "react";
import Register from "./Pages/Register/Register";
import LoadingScreen from "./Pages/LoadingScreen/LoadingScreen";
import { date } from "./../src/Assets/MockData/mockdata";
import AddServerModal from "./Components/AddServerModal/AddServerModal";
import AddServerModalJoin from "./Components/AddServerModalJoin/AddServerModalJoin";
import AddServerModalCreateServerTemplate0 from "./Components/AddServerModalCreateServerTemplate0/AddServerModalCreateServerTemplate0";
import CreateServerModal from "./Components/CreateServerModal/CreateServerModal";

function App() {
  const [selected, setSelected] = useState("");
  const [joinRef, setJoinRef] = useState("");
  const [sertemp, setsertemp] = useState("");
  const [createsev, setcreatesev] = useState("");

  const addServerModalRef = useRef();
  function handleRef() {
    addServerModalRef.current.classList.remove("show");
    joinRef.current.classList.add("show");
  }

  function handleRefCreateServer() {
    addServerModalRef.current.classList.remove("show");
    sertemp.current.classList.add("show");
  }

  function handleRefCreateServerButton() {
    sertemp.current.classList.remove("show");
    createsev.current.classList.add("show");
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
      <AddServerModal
        ref={addServerModalRef}
        onClick={handleRef}
        onClick1={handleRefCreateServer}
      />
      <AddServerModalCreateServerTemplate0
        setsertemp={setsertemp}
        addServerModalRef={addServerModalRef}
        onClick={handleRefCreateServerButton}
      />
      <CreateServerModal
        setcreatesev={setcreatesev}
        addServerModalRef={sertemp}
      />
    </div>
  );
}

export default App;

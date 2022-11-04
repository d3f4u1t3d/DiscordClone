import React from "react";
import ServerButton from "../ServerButton/ServerButton";
import "./GuildsContainer.css";
import { serverData } from "../../Assets/MockData/mockdata";
import { useState } from "react";

function GuildsContainer(props) {
  let [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    props.addServerModalRef.current.classList.add("show");
  };

  return (
    <div className="nav">
      <nav>
        <ul className="serverlist">
          {serverData.map((data) => {
            if (data.alt === "Add a Server") {
              return (
                <ServerButton
                  onClick={toggleModal}
                  svg={data.svg}
                  img={data.img}
                  alt={data.alt}
                  className={data.className}
                  imgClassName={data.imgClassName}
                />
              );
            }

            return (
              <ServerButton
                svg={data.svg}
                img={data.img}
                alt={data.alt}
                className={data.className}
                imgClassName={data.imgClassName}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default GuildsContainer;

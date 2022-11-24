import React from "react";
import "./UserInfoPopUp.css";

function UserInfoPopUp() {
  return (
    <>
      <div class="card">
        <div class="card-header"></div>
        <div class="card-content">
          <img
            class="card-pfp"
            src="https://avatars.githubusercontent.com/u/71274141?v=4"
            width="100"
          />
          {/* <!--       <div class="card-status-dnd"></div> --> */}
          <div class="card-status-idle"></div>
          {/* <!-- <div class="card-status-streaming"></div> --> */}
          {/* <!-- <div class="card-status-offline"></div> --> */}
          {/* <!-- <div class="card-status-online"></div> --> */}
          <div class="card-badges">
            <img
              data-tooltip="HypeSquad Bravery"
              class="card-badge"
              src="https://static.wikia.nocookie.net/discord/images/b/b5/Bravery.png"
            />
            {/* <!-- <img data-tooltip="HypeSquad Brilliance" class="card-badge" src="https://static.wikia.nocookie.net/discord/images/b/b8/Brilliance.png"> --> */}
            {/* <!-- <img data-tooltip="HypeSquad Balance" class="card-badge" src="https://static.wikia.nocookie.net/discord/images/5/50/Balance.png"> --> */}
          </div>

          <div class="card-user-info">
            <h4 class="card-username">
              woidzero<span class="card-descrim">#1315</span>
            </h4>
            <p class="card-user-status">up-up-up-up-up-up</p>
            <h4 class="card-label-aboutme">about me</h4>
            <p class="card-label-content">
              - Python, Rust, PHP, C# Coder
              <br />
              - Web-designer, GFX designer.
              <br />-{" "}
              <a href="https://github.com/woidzero">
                https://github.com/woidzero
              </a>
              <br />
            </p>
            <h4 class="card-label-note">note</h4>
            <textarea
              placeholder="Click to add a note"
              class="card-note-content"
              type="text"
              onkeypress="this.value = this.value.substring(0,256);"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfoPopUp;

import React from 'react'

function UserInfoPopUp() {
  return (
    <div>
  <div id="card">
    <div id="card-header"></div>
    <div id="card-content">
      <img id="card-pfp" src="https://avatars.githubusercontent.com/u/71274141?v=4" width="100"/>
      {/* <!--       <div id="card-status-dnd"></div> --> */}
      <div id="card-status-idle"></div>
      {/* <!-- <div id="card-status-streaming"></div> --> */}
      {/* <!-- <div id="card-status-offline"></div> --> */}
      {/* <!-- <div id="card-status-online"></div> --> */}
      <div id="card-badges">
        <img data-tooltip="HypeSquad Bravery" id="card-badge" src="https://static.wikia.nocookie.net/discord/images/b/b5/Bravery.png" />
        {/* <!-- <img data-tooltip="HypeSquad Brilliance" id="card-badge" src="https://static.wikia.nocookie.net/discord/images/b/b8/Brilliance.png"> --> */}
        {/* <!-- <img data-tooltip="HypeSquad Balance" id="card-badge" src="https://static.wikia.nocookie.net/discord/images/5/50/Balance.png"> --> */}
      </div>

      <div id="card-user-info">
        <h4 id="card-username">
          woidzero<span id="card-descrim">#1315</span>
        </h4>
        <p id="card-user-status">up-up-up-up-up-up</p>
        <h4 id="card-label-aboutme">about me</h4>
        <p id="card-label-content">
          - Python, Rust, PHP, C# Coder<br />
          - Web-designer, GFX designer.<br />
          - <a href="https://github.com/woidzero">https://github.com/woidzero</a><br />
        </p>
        <h4 id="card-label-note">note</h4>
        <textarea placeholder="Click to add a note" id="card-note-content" type="text" onkeypress="this.value = this.value.substring(0,256);"></textarea>
      </div>
    </div>
  </div>
    </div>
  )
}

export default UserInfoPopUp

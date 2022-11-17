import React from "react";
import "./Card.css";

function Card({
  splashimg,
  guildimg,
  Title,
  subTitle,
  onLineCount,
  memberCount,
}) {
  return (
    <>
      <div className="cardContainer">
        <div className="CardHeader">
          <div className="splash">
            <img src={splashimg} alt="" />
          </div>
          <div className="actionButton">
            <div className="actionbuttonwrapper">
              <div className="clickable">
                <svg
                  class="overflowIcon-1IdVHF"
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="guildIconContainer">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <mask
                id="svg-mask-squircle"
                maskContentUnits="objectBoundingBox"
                viewBox="0 0 1 1"
              >
                <path
                  fill="white"
                  d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z"
                ></path>
              </mask>
              <foreignObject
                x="0"
                y="0"
                width="48"
                height="48"
                overflow="visible"
                mask="url(#svg-mask-squircle)"
              >
                <div class="iconMasker">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <mask
                      id="svg-mask-squircle"
                      maskContentUnits="objectBoundingBox"
                      viewBox="0 0 1 1"
                    >
                      <path
                        fill="white"
                        d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z"
                      ></path>
                    </mask>
                    <foreignObject
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      overflow="visible"
                      mask="url(#svg-mask-squircle)"
                    >
                      <img src={guildimg} alt="" class="avatar-30VHqO" />
                    </foreignObject>
                  </svg>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
        <div className="GuildInfo">
          <div className="GuildTitle">
            <h3 className="CardTitle">{Title}</h3>
          </div>
          <div className="GuildtitleSubText">{subTitle}</div>
          <div className="MembersInfo">
            <div className="memberCount">
              <div className="onLine"></div>
              <div className="onLineText">{onLineCount} Online</div>
            </div>
            <div className="memberCount">
              <div className="offLine onLine"></div>
              <div className="onLineText">{memberCount} Members</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";
import { useState } from "react";

import "./NormalDropDown.css";

function NormalDropDown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className="serverNameDropDown"
        onClick={(e) => setIsActive(!isActive)}
      >
        Server Name
        <svg
          style={{ marginRight: "10px" }}
          fill="#b9bbbe"
          xmlns="http://www.w3.org/2000/svg"
          height={"14px"}
          width={"14px"}
          viewBox="0 0 448 512"
        >
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
      {isActive && (
        <div className="serverNameDropDownContent">
          <div className="items blue">
            <div className="serverNameDropDownText">Server Boost</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 8 12">
                <path
                  d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="items blue">
            <div className="serverNameDropDownText blue_text">
              Invite People
            </div>
            <div className="serverNameDropDownIcon blue_text">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Server Settings</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Create Channel</div>
            <div className="serverNameDropDownIcon">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Create Category</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Create Event</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z"
                  fill="currentColor"
                ></path>
                <path d="M7 11H12V16H7V11Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">App Directory</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C14.761 2 17 4.238 17 7V9H7V7C7 4.238 9.238 2 12 2ZM10.5 5.5C10.5 6.329 11.172 7 12 7C12.828 7 13.5 6.329 13.5 5.5C13.5 4.671 12.828 4 12 4C11.172 4 10.5 4.671 10.5 5.5ZM23 22H17L19 19V12H17V18C17 18.553 16.552 19 16 19H14L15 22H9L10 19H8C7.448 19 7 18.553 7 18V12H5V19L7 22H1L3 19V12C3 10.896 3.897 10 5 10H19C20.103 10 21 10.896 21 12V19L23 22ZM13 14C13 14.553 13.448 15 14 15C14.552 15 15 14.553 15 14C15 13.447 14.552 13 14 13C13.448 13 13 13.447 13 14Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="items blue">
            <div className="serverNameDropDownText">Notification Settings</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Privacy Settings</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="items blue">
            <div className="serverNameDropDownText">Edit Server Profile</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items blue">
            <div className="serverNameDropDownText">Hide Muted Channels</div>
            <div className="serverNameDropDownIcon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="items red">
            <div className="serverNameDropDownText red_text">Report Raid</div>
            <div className="serverNameDropDownIcon red_text">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="items red">
            <div className="serverNameDropDownText red_text">Leave Server</div>
            <div className="serverNameDropDownIcon red_text">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NormalDropDown;

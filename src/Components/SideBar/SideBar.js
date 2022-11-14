import React from "react";
import Button from "../Button/Button";
import PrivateChatContents from "../PrivateChatContents/PrivateChatContents";
import {
  static_chats_list,
  dynamic_chats_list,
} from "../../Assets/MockData/mockdata";
import "./SideBar.css";
import UserInfo from "../UserInfo/UserInfo";

function Type1() {
  return (
    <div className="sidebar">
      <div className="SearchBar">
        <Button
          className="OverViewTopButton"
          value="Find or start a conversation"
        />
      </div>
      <div className="content_chats">
        <ul className="privatechats">
          {static_chats_list.map((data) => {
            return (
              <PrivateChatContents
                svg={data.svg}
                img={data.img}
                name={data.name}
                badgecounter={data.badgecounter}
              />
            );
          })}

          <h2 className="headingcontainer">
            <span className="Heading">Direct Messages</span>
            <div className="invitebutton">
              <svg aria-hidden="true" role="img" viewBox="0 0 18 18">
                <polygon
                  fillRule="nonzero"
                  fill="currentColor"
                  points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                ></polygon>
              </svg>
            </div>
          </h2>
          {dynamic_chats_list.map((data) => {
            return (
              <PrivateChatContents
                svg={data.svg}
                img={data.img}
                name={data.name}
                badgecounter={data.badgecounter}
                ava={data.ava}
                className={data.className}
              />
            );
          })}
        </ul>
      </div>
      <UserInfo />
    </div>
  );
}

function Type3() {
  return (
    <div className="sidebar">
      <div className="SidebarGuildsDiscoveryHeader">Discover</div>
      <div className="GuildsDiscoveryList">
        <ul className="privatechats">
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill="currentColor"
                  d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                ></path>
              </svg>
            }
            img=""
            name="Home"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z"
                  ></path>
                  <rect width="24" height="24"></rect>
                </g>
              </svg>
            }
            img=""
            name="Gaming"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill="currentColor"
                  d="M19.396 3.29898C19.016 3.01598 18.524 2.93098 18.07 3.06498L8.07 6.06498C7.435 6.25498 7 6.83998 7 7.50298V15.054C6.835 15.03 6.671 15.003 6.5 15.003C4.566 15.003 3 16.571 3 18.503C3 20.434 4.566 22.003 6.5 22.003C8.434 22.003 10 20.434 10 18.503V8.61798L17 6.51798V13.054C16.835 13.03 16.671 13.003 16.5 13.003C14.566 13.003 13 14.571 13 16.503C13 18.434 14.566 20.003 16.5 20.003C18.434 20.003 20 18.434 20 16.503V4.50298C20 4.02698 19.775 3.58198 19.396 3.29898Z"
                ></path>
              </svg>
            }
            img=""
            name="Music"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.447 8.11002L12.447 3.11002C12.166 2.96902 11.834 2.96902 11.552 3.11002L1.552 8.11002C1.35 8.21002 1.197 8.38402 1.107 8.57302C1.046 8.69502 1 8.90202 1 9.00502V14.77C1 15.322 1.448 15.77 2 15.77C2.552 15.77 3 15.322 3 14.77V10.172L12.015 13.927L22.372 9.93302C22.737 9.78602 22.983 9.44002 22.999 9.04602C23.016 8.65202 22.799 8.28702 22.447 8.11002ZM12 16.005C11.869 16.005 11.738 15.979 11.615 15.928L5 13.172V16.185C5 16.564 5.214 16.91 5.553 17.08C5.7173 17.1621 5.88209 17.2461 6.04836 17.3308C7.61773 18.1306 9.31996 18.998 12 18.998C14.6812 18.998 16.3872 18.1284 17.956 17.3287C18.1208 17.2447 18.2842 17.1614 18.447 17.08C18.786 16.911 19 16.564 19 16.186V13.385L12.359 15.939C12.243 15.982 12.122 16.005 12 16.005ZM1 18.005C1 17.453 1.448 17.005 2 17.005C2.552 17.005 3 17.453 3 18.005V20.005C3 20.557 2.552 21.005 2 21.005C1.448 21.005 1 20.557 1 20.005V18.005Z"
                ></path>
              </svg>
            }
            img=""
            name="Education"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6683 11.9964C19.5992 13.2208 20.3732 14.4331 20.9422 15.5701C22.5858 18.8593 22.0118 20.4688 21.2418 21.2398C20.895 21.5846 20.2596 21.9978 19.1951 21.9978C17.3645 21.9978 14.7478 20.7553 12.0004 18.6683C9.25198 20.7553 6.63527 21.9978 4.80569 21.9978C3.74111 21.9978 3.10478 21.5846 2.75896 21.2398C1.98792 20.4677 1.41392 18.8593 3.05853 15.5701C3.62751 14.4331 4.40257 13.2218 5.33245 11.9964C2.51569 8.28291 1.00176 4.51719 2.75896 2.75898C3.10578 2.41316 3.74111 2 4.80569 2C6.63628 2 9.25298 3.24251 12.0004 5.32944C14.7488 3.24251 17.3655 2 19.1951 2C20.2596 2 20.895 2.41216 21.2418 2.75898C22.999 4.51618 21.4851 8.28191 18.6683 11.9964ZM19.8203 4.18042C19.6806 4.03969 19.4032 4.01053 19.1951 4.01053C18.0481 4.01053 15.9933 4.9203 13.6209 6.64835C15.0262 7.86472 16.2346 9.08512 17.3655 10.395C19.752 7.13188 20.3541 4.71422 19.8203 4.18042ZM14.1325 14.1316C14.8654 13.3987 15.5108 12.689 16.0928 12.0024C15.4876 11.2856 14.8342 10.5689 14.1325 9.86621C13.4128 9.14744 12.701 8.51312 12.0004 7.92202C11.2997 8.51312 10.588 9.14744 9.86821 9.86621C9.16653 10.5689 8.51311 11.2856 7.90794 12.0024C8.48999 12.689 9.13637 13.3987 9.86821 14.1316C10.588 14.8513 11.2997 15.4856 12.0004 16.0747C12.701 15.4856 13.4128 14.8513 14.1325 14.1316ZM4.80569 4.01053C4.5986 4.01053 4.32115 4.03969 4.18142 4.18042C3.64661 4.71422 4.24977 7.13088 6.63628 10.394C7.83556 9.00469 9.05696 7.79435 10.3799 6.64735C8.00645 4.9203 5.95269 4.01053 4.80569 4.01053ZM4.18041 19.8183C4.32014 19.9581 4.5976 19.9872 4.80569 19.9872C5.95269 19.9872 8.00746 19.0785 10.3799 17.3514C8.98357 16.1421 7.7873 14.9348 6.6413 13.6078C5.92053 14.593 5.31133 15.56 4.85695 16.4688C3.79539 18.5909 3.9502 19.5881 4.18041 19.8183ZM19.1941 19.9872C19.4021 19.9872 19.6796 19.9581 19.8193 19.8183C20.0495 19.5881 20.2044 18.5919 19.1428 16.4688C18.6884 15.559 18.0792 14.592 17.3584 13.6078C16.2114 14.9358 15.0152 16.1431 13.6199 17.3514C15.9933 19.0785 18.0471 19.9872 19.1941 19.9872ZM14.0109 11.9984C14.0109 13.1088 13.1108 14.0089 12.0004 14.0089C10.89 14.0089 9.98984 13.1088 9.98984 11.9984C9.98984 10.888 10.89 9.98784 12.0004 9.98784C13.1108 9.98784 14.0109 10.888 14.0109 11.9984Z"
                ></path>
              </svg>
            }
            img=""
            name="Science & Tech"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"
                ></path>
              </svg>
            }
            img=""
            name="Entertainment"
            badgecounter=""
          />
          <PrivateChatContents
            svg={
              <svg>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
            img=""
            name="Student Hub"
            badgecounter=""
          />
        </ul>
      </div>
      <UserInfo />
    </div>
  );
}

function SideBar(props) {
  return (
    <>
      {props.type === 1 ? (
        <Type1 />
      ) : props.type === 2 ? (
        ""
      ) : props.type === 3 ? (
        <Type3 />
      ) : (
        ""
      )}
      {/* <div className="sidebar">
        <div className="SearchBar">
          <Button
            className="OverViewTopButton"
            value="Find or start a conversation"
          />
        </div>
        <div className="content_chats">
          <ul className="privatechats">
            {static_chats_list.map((data) => {
              return (
                <PrivateChatContents
                  svg={data.svg}
                  img={data.img}
                  name={data.name}
                  badgecounter={data.badgecounter}
                />
              );
            })}

            <h2 className="headingcontainer">
              <span className="Heading">Direct Messages</span>
              <div className="invitebutton">
                <svg aria-hidden="true" role="img" viewBox="0 0 18 18">
                  <polygon
                    fillRule="nonzero"
                    fill="currentColor"
                    points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                  ></polygon>
                </svg>
              </div>
            </h2>
            {dynamic_chats_list.map((data) => {
              return (
                <PrivateChatContents
                  svg={data.svg}
                  img={data.img}
                  name={data.name}
                  badgecounter={data.badgecounter}
                  ava={data.ava}
                  className={data.className}
                />
              );
            })}
          </ul>
        </div>
        <UserInfo />
      </div> */}
      {/* <div className="sec-center">
                    <input className="dropdown1" type="checkbox" id="dropdown" name="dropdown" />
                    <label className="for-dropdown" for="dropdown">
                        <p>IBM DRAGONS<i className="uil arrow down"></i></p>
                    </label>
                    <div className="section-dropdown">
                        <div className="group">
                            <div className="dropDownContent">
                                Server Boost
                            </div>
                            <div className="icons" style={{color: '#ff73fa'}}><svg className="icon-E4cW1l" aria-hidden="true"
                                    role="img" width="18" height="18" viewBox="0 0 8 12">
                                    <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z"
                                        fill="currentColor"></path>
                                    <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                    </path>
                                </svg></div>
                        </div>
                        <div className="seperator"></div>
                        <div className="group">
                            <div className="dropdowncontent1">
                                Invite People
                            </div>
                            <div className="icons1">
                                <svg className="icon-E4cW1l" aria-hidden="true" role="img" width="18" height="18"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                        d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="seperator"></div>
                        <div className="group">
                            <div className="dropDownContent">
                                Notification Settings
                            </div>
                            <div className="icons">
                                <svg className="icon-E4cW1l" aria-hidden="true" role="img" width="18" height="18"
                                    viewBox="0 0 24 24" fill="none">
                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                        d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="group">
                            <div className="dropDownContent">
                                Privacy Settings
                            </div>
                            <div className="icons">
                                <svg className="icon-E4cW1l" aria-hidden="true" role="img" width="18" height="18"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="seperator"></div>
                        <div className="group">
                            <div className="dropDownContent">
                                Edit Server Profile
                            </div>
                            <div className="icons">
                                <svg className="icon-E4cW1l" aria-hidden="true" role="img" width="16" height="16"
                                    viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="group">
                            <div className="dropDownContent">
                                Hide Muted Channels
                            </div>
                            <div className="icons">
                                <input type="checkbox" className="mutebox" id="mutebox"/>
                            </div>
                        </div>
                        <div className="seperator"></div>
                        <div className="group1">
                            <div className="content2">
                                Leave Server
                            </div>
                            <div className="icons2">
                                <svg className="icon-E4cW1l" aria-hidden="true" role="img" width="18" height="18"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div> */}

      {/* <div className='content_chats'>
            <ul className="privatechats">
                <li className='content1'>
                    <div className="avatarwithtext">
                        <div className="avatar">
                        <svg className="linkButtonIcon-7rsZcu" aria-hidden="true" role="img" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                        </div>
                        <div className="name">
                            Friends
                        </div>
                    </div>
                    <div className="badgecounter">
                        1
                    </div>
                </li>

                <li className='content1'>
                    <div className="avatarwithtext">
                        <div className="avatar">
                        <svg className="linkButtonIcon-7rsZcu" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"></path></svg>
                        </div>
                        <div className="name">
                            Nitro
                        </div>
                    </div>
                </li>
                <h2 className='headingcontainer'>
                    <span className='Heading'>Direct Messages</span>
                    <div className="invitebutton">
                    <svg aria-hidden="true" role="img" viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                    </div>
                </h2>
            </ul>
        </div> */}

      {/* <section className="bottom_panel">
                <div className="user-info">
                    <div className="avatar_wrapper">
                        <img className="avatar" src="https://picsum.photos/200" alt="profile" />
                        <div className="status-holder">
                            <div className="status-icon"></div>
                        </div>
                    </div>
                    <div className="name-tag">
                        <h1 className="username tipper" data-tip="Click to copy username">d3f4u1t3d</h1>
                        <div className="roller">
                            <p className="status">Sleep</p>
                            <p className="tag">#4078</p>
                        </div>
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="switcher tipper" data-tip="Unmute">
                        <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                                fill="currentColor"></path>
                            <path
                                d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                                fill="currentColor"></path>
                            <path
                                d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                                fill="currentColor"></path>
                            <path
                                d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                                className="strikethrough-2Kl6HF" fill="currentColor"></path>
                        </svg>
                    </button>
                    <button className="switcher tipper" data-tip="Deafen">
                        <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                                    fill="currentColor"></path>
                            </svg>
                        </svg>
                    </button>
                    <button className="switcher tipper" data-tip="User Settings">
                        <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z">
                            </path>
                        </svg>
                    </button>
                </div>
        </section> */}
    </>
  );
}

export default SideBar;

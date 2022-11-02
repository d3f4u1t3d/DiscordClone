import React from 'react'
import Button from '../Button/Button'
import PrivateChatContents from '../PrivateChatContents/PrivateChatContents'
import { static_chats_list,dynamic_chats_list } from '../../Assets/MockData/mockdata'
import "./SideBar.css"
import Avatar from '../Avatar/Avatar'
import UserInfo from '../UserInfo/UserInfo'

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className='SearchBar'>
        <Button className="OverViewTopButton" value="Find or start a conversation"/> 
        </div>
        <div className='content_chats'>
            <ul className="privatechats">
                {static_chats_list.map((data)=>{
                    return (<PrivateChatContents svg={data.svg} img={data.img} name={data.name} badgecounter={data.badgecounter}/>)
                })}

                <h2 className='headingcontainer'>
                    <span className='Heading'>Direct Messages</span>
                    <div className="invitebutton">
                    <svg aria-hidden="true" role="img" viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                    </div>
                </h2>
                {dynamic_chats_list.map((data)=>{
                    return (<PrivateChatContents svg={data.svg} img={data.img} name={data.name} badgecounter={data.badgecounter} ava={data.ava} className={data.className}/>)
                })}
            </ul>
        </div>


        <UserInfo />


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

      </div>
    </>
  )
}

export default SideBar

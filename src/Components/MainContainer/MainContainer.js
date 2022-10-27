import React from 'react'
import Button from '../Button/Button'
import ChatInput from '../ChatInput/ChatInput'
import SearchBarMainContainer from '../SearchBarMainContainer/SearchBarMainContainer'
import './MainContainer.css'

function MainContainer() {
  return (
    <>
      <div className="main_container">
        <SearchBarMainContainer/>
        

        <div style={{display:'flex', justifyContent:'space-between', width:'100%', height:'100%'}}>
            <div style={{ display:'flex', height: '100%', justifyContent: 'space-between', width: '100%', flexDirection: 'column' }}>
        <div className="chatmessages">
            <div className="message">
                <img src="https://picsum.photos/200" alt="" height="40px" width="40px" style={{borderRadius:"50%"}}/>
                    <div className="message__info">
                        <h4>d3f4u1t3d <span className="message__timestamp">28/09/2022</span></h4>
                            <p>Hello</p>
                    </div>
            </div>
        <ChatInput/>
        </div>
        </div>
                    {/* <ul className="memberlist">
                        <li className="heading">MEMBERS - 2</li>
                        <li className="members">
                            <div className="muser-info">
                                <div className="avatar_wrapper">
                                    <img className="avatar" src="assets/profile.png" alt="profile"/>
                                    <div className="status-holder">
                                        <div className="status-icon"></div>
                                    </div>
                                </div>
                                <div className="name-tag">
                                    <h1 className="musername">d3f4u1t3d</h1>
                                    <div className="roller">
                                        <p className="status">Sleep</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="members">
                            <div className="muser-info">
                                <div className="avatar_wrapper">
                                    <img className="avatar" src="assets/profile.png" alt="profile"/>
                                    <div className="status-holder">
                                        <div className="status-icon"></div>
                                    </div>
                                </div>
                                <div className="name-tag">
                                    <h1 className="musername">d3f4u1t3d</h1>
                                    <div className="roller">
                                        <p className="status">Sleep</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul> */}
                </div>
      </div>
    </>
  )
}

export default MainContainer

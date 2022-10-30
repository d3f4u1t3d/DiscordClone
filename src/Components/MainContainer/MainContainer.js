import ChatInput from '../ChatInput/ChatInput'
import Message from '../Message/Message'
import SearchBarMainContainer from '../SearchBarMainContainer/SearchBarMainContainer'
import './MainContainer.css'

function MainContainer() {
  return (
    <>
      <div className="main_container">
        <SearchBarMainContainer/>
        {/* <div className="testcontainer">
            <div className="chatcontainer">


                <div className="chatinput">
                </div>
            </div>
            <div className="memberscontainer"></div>
        </div> */}
        

        <div style={{display:'flex', justifyContent:'space-between', width:'100%', height:'100%',flexDirection:'row' , overflow:'scroll'}}>
            <div style={{ display:'flex', height: '100%', justifyContent: 'space-between', width: '100%', flexDirection: 'column' }}>
        <div className="chatmessages">
            <Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /> <Message /> <Message /> <Message />
        </div>
        
        <ChatInput/>
        </div>
                    <ul className="memberlist">
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
                    </ul>
             </div>
      </div>
    </>
  )
}

export default MainContainer

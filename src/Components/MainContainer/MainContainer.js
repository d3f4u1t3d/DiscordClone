import ChatInput from '../ChatInput/ChatInput'
import MemberListContainer from '../MemberListContainer/MemberListContainer'
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
        

        <div className="maincontainer1">
            <div style={{ display:'flex', height: '100%', justifyContent: 'space-between', width: '100%', flexDirection: 'column' }}>
        <div className="chatmessages">
            <Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /> <Message /> <Message /> <Message />
        </div>
        
        <ChatInput/>
        </div>
        <MemberListContainer/>                    
        </div>
      </div>
    </>
  )
}

export default MainContainer

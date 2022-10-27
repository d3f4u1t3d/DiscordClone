import React from 'react'
import './Message.css'

function Message() {
  return (
    <>
      {/* <div className="message">
                <img src="https://picsum.photos/200" alt="" height="40px" width="40px" style={{borderRadius:"50%"}}/>
                    <div className="message__info">
                        <h3>d3f4u1t3d <span className="message__timestamp">28/09/2022</span></h3>
                            <p>Hello</p>
                    </div>
        </div> */}

        <div className="message">
            <img src="https://picsum.photos/200" alt="check" className='messageavatar' />
            <div className="message__info">
                <div className="messageheader">
                    <span className='Username'>d3f4u1t3d</span>
                    <span className='timestamp'>27/10/2022</span>
                </div>
                <div className="messagecontent">hello</div>
            </div>
        </div>
    </>
  )
}

export default Message

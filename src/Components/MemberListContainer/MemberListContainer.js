import React from 'react'
import Avatar from '../Avatar/Avatar'
import "./MemberListContainer.css"

function MemberListContainer() {
  return (
    <div style={{width:"20%"}}>
      <ul className="memberlist">
                        <li className="heading">MEMBERS - 2</li>
                        <li className="members">
                            <div className="muser-info">
                                  <Avatar img="https://picsum.photos/200" svg='' ava={1} className="status-holder" />
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
  )
}

export default MemberListContainer 
import React from 'react'
import Avatar from '../Avatar/Avatar'
import './PrivateChatContents.css'

function PrivateChatContents({svg,img,name,badgecounter,ava,className}) {
  return (
    <>
        <li className='content1'>
                    <div className="avatarwithtext">
                      <Avatar svg={svg} img={img} ava={ava} className={className}/>
                        {/* <div className="chatavatar">
                        {svg==""?<img src={img}/>:svg}
                        </div> */}
                        <div className="sidebarname">
                            {name}
                        </div>
                    </div>
                    {(!badgecounter)?"":<div className="badgecounter">
                        {badgecounter}
                    </div>}
                    
                </li>
    </>
  )
}

export default PrivateChatContents
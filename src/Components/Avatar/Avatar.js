import React from 'react'
import './Avatar.css'

function Avatar({svg,img,ava,className}) {
  return (
    <>
        <div className="chatavatar">
            {svg==""?<img src={img}/>:svg}
        </div>
        {(!ava)?'':<div className={className}>
            <div className="status-icon"></div>
        </div>}
    </>
  )
}

export default Avatar
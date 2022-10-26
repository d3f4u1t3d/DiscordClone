import React from 'react'
import "./ServerButton.css"
import PopUp from '../PopUp/PopUp'

export default function ServerButton({svg,img,className,imgClassName,alt}) {
  return (
    <div>
    <div className={className}>
       {svg==""?<img src={img} className={imgClassName} alt={alt} />:svg}
       <PopUp popUpClassName='servername_popup' headingClassName='servername' serverName={alt} />
    </div>
    </div>
    
  )
}

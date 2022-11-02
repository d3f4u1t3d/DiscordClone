import React from 'react'
import './ButtonWithImageAndDiv.css'



import ArrowRight from './../../Assets/Logos/arrow-right.svg'

function ButtonWithImageAndDiv({img,text}) {
  return (
    <>
      <button className='photobutton'>
        <img src={img} alt="" className='iconservercreate' />
        <div className='buttonText' >{text}</div>
        <img className='buttonArrow' src={ArrowRight} alt="arrow" />
      </button>
    </>
  )
}

export default ButtonWithImageAndDiv

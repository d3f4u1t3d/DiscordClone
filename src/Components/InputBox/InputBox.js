import React from 'react'

import './InputBox.css'

function InputBox(props) {
  return (
    <div className='InputBox'>
        <label className='label1' htmlFor={props.htmlFor}>{props.Content}
          </label>
          <input 
            type={props.type} 
            className={props.className} 
            id={props.htmlFor} 
            onChange={props.onChange}
            name={props.name}
            required
          />
    </div>
  )
}

export default InputBox
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import InputBox from '../../Components/InputBox/InputBox'
import Button from '../../Components/Button/Button'
import DropDown from '../../Components/DropDown/DropDown'
import {date} from './../../Assets/MockData/mockdata'

function Register() {

  const [dateSelected,dateSetSelected] = useState("");
  const [monthSelected,monthSetSelected] = useState("");
  const [yearSelected,yearSetSelected] = useState("");


  return (
    <>
        <div className='RegisterPage'>
        <div className='container1'>
      <div className="wrapper1">
        <div className="textcontainer1">
        <h1 className='h11'>Create an account</h1>
        </div>
        <form className="form1" >

          <InputBox type="text" htmlFor="Email" Content="EMAIL" className="SpaceRequired" />

          <InputBox type="text" htmlFor="Username" Content="USERNAME" className="SpaceRequired" />
          
          <InputBox type="password" htmlFor="Password" Content="PASSWORD" className="SpaceRequired" />
          <label className='label1'>DATE OF BIRTH
          </label>
          
          <div className='DOBContainer'>
          <DropDown selected={dateSelected} setSelected={dateSetSelected} option={date.day} defaut="Date"/>
          <DropDown selected={monthSelected} setSelected={monthSetSelected} option={date.month} defaut="Month" />
          <DropDown selected={yearSelected} setSelected={yearSetSelected} option={date.year} defaut="Year"/>
          </div>

          {/* <InputBox type="checkbox" htmlFor="emailConfirmation" Content="(Optional) It’s okay to send me emails with Discord updates, tips and special offers. You can opt out at any time." className=".checkbox1" checked/> */}
          {/* <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
          <input className='checkbox1' type="checkbox"/>
          <label className='label2'>(Optional) It’s okay to send me emails with Discord updates, tips and special offers. You can opt out at any time.</label>
          </div> */}

<label class="container2">(Optional) It’s okay to send me emails with Discord updates, tips and special offers. You can opt out at any time.
  <input type="checkbox" />
  <span class="checkmark2"></span>
</label>

          <Button type = "submit " value="Continue" className="ButtonLogin" option={date}/>
          <p className='login'><Link to='/login'>Already have an account?</Link></p>

          <p className='disclaimer'>By registering you agree to Discord's<a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a> </p>
        </form>
      </div>
      </div>
      </div>
 
    </>
  )
}

export default Register
import React from 'react'
import './Home.css'
import DiscordLogo from './../../Assets/Logos/full_logo_white_RGB.svg'
import Button from './../../Components/Button/Button'
import SideBar from '../../Components/DashboardSideBar/DashBoardSideBar'

function Home() {
  return (
    <div>
        <div className="layout">
            <div></div>
            <div className="content">
                <div className="navbar">
                    <a href="/">
                        <img src={DiscordLogo} alt="" height={34} width={124} />
                    </a>
                    <div className='rightcontainer'>
                        <Button className="LoginButton" value="Login"/>
                        <SideBar/>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>      
    </div>
  )
}

export default Home

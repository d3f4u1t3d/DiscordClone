import React from 'react'
import ServerButton from '../ServerButton/ServerButton'
import './GuildsContainer.css'
import {serverData} from '../../Assets/MockData/mockdata'

function GuildsContainer() {
    
  return (
    <div className='nav'>    
        <nav>
            <ul className="serverlist">
                
                {serverData.map((data) =>{
                    return (<ServerButton svg={data.svg} img ={data.img} alt={data.alt} className={data.className} imgClassName={data.imgClassName} />)
                })}    
            </ul>
        </nav>
    </div>
  )
}

export default GuildsContainer
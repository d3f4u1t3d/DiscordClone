import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from './../Pages/Login/Login'
import Register from './../Pages/Register/Register'

function Router() {

  // const route = ['/login','/signup']
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<App/>}/>

            
            {/* {
              route.map((val,index)=>{
                return (<Route key={index} path={val} element={<Homepage />} />)
              })
            } */}
        </Routes>
    </>
  )
}

export default Router
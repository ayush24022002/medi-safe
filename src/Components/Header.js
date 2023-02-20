import React, { Component } from 'react'
import './CSS/header.css'
import logo from '../icon.png';


const Header =() =>{
  return(
    <div className='h_main'>
        
        <div className='cont'>
            <h3>MEDI-SAFE</h3>
            <h3>MEDI-SAFE</h3>
        </div>
        <div className='rr'>
        <div className='box'>
            <div className='r'></div>
            <img className='logo' src={logo} alt="Medi-safe logo"/>   
        </div>
        </div>
    </div>
  )
   
  
}

export default Header

import React, { Component } from 'react'
import './CSS/footer.css'


const Footer =() =>{
  return(
    <div className='f_main'>
      <div className='f_container'>
        <div className='f_row'>
          <div className='f_col'>
            <h2> MEDI-SAFE</h2>
            <ul className='f_list'>
              <li>+91 733-859-8727</li>
              <li>Bangalore, India</li>
              <li>BMSIT&M</li>
            </ul>



          </div>

          <div className='f_col'>
            <h1>INDIANS</h1>
            <ul className='f_list'>
              <li>  </li>
              <li> </li>
              <li>  </li>
            </ul>


          </div>

          <div className='f_col'>
            <h2>3-C Formula</h2>
            <ul className='f_list'>
              <li>Confidence</li>
              <li>Convince</li>
              <li>Confuse </li>
            </ul>


          </div>

        </div>
        <hr />
        <div className="f_row">
          <p className="f_col-sm">
            &copy;{new Date().getFullYear()} MEDI-SAFE| All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>

      </div>

    </div>
  )
   
  
}

export default Footer

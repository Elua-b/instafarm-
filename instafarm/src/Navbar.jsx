import React from 'react'
import "./App.css"
import logo from './logo.svg'




function Navbar() {
  return (
    <div className='navbar'>
        <div className='app_info'>
            <img src={logo}/>
            <div className='app_name'>
                <h3>instafarm</h3>
                <p>farms.</p>

            </div>
        </div>
        <div className='search_box'>
            <h3>All categories</h3>
            <p>|</p>
            <input type={'text'} placeholder="Search for Items" />
            <button>+</button>
                

        </div>
        
    </div>
  )
}

export default Navbar
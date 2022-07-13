import React from 'react'
import "./App.css"
import logo from './logo.svg'
 import SearchIcon from '@mui/icons-material/Search'
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import  Badge  from '@mui/material/Badge';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import Avatar from '@mui/material/Avatar';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




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
            <KeyboardArrowDownIcon/>
            <p>|</p>
            <input type={'text'} placeholder="Search for Items" />
            <button><SearchIcon/></button>
           

                

        </div>
        <div className='nav_icons'>
          <div className='nav_badge'>
            <Badge badgeContent={4} color="success" className="badge">
              <FavoriteBorderIcon/>
            </Badge>
            <p>Wishlist</p>
            </div>
            <div className='nav_badge'>
            <Badge badgeContent={3} color="secondary" className="badge">
              <ShoppingCartOutlinedIcon/>
              
            </Badge>
            <p>My cart</p>
            <KeyboardArrowDownIcon/>
            </div>

        </div>
        <div className='user_profile'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p>Remy Sharp</p>
        <KeyboardArrowDownIcon/>
        </div>
    </div>
  )
}

export default Navbar
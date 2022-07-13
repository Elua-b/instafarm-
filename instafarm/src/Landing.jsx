import React from 'react'
import Button from '@mui/material/Button'
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Landing() {
  return (
    <div className='landing'>
        <div className='header'>
            <Button className='head_but'>
                <WidgetsIcon/>
                Browse All Categories
            </Button>
            <div className='head_icon'>
                <HomeOutlinedIcon/>
                <p>Home</p>
            </div>
            <div className='head_icon'>
                <LocalFireDepartmentOutlinedIcon/>
                <p>Hot deals</p>
            </div>
            <div className='head_icon'>
                <PercentOutlinedIcon/>
                <p>Promotions</p>
            </div>
            <div className='head_icon'>
                <ExtensionOutlinedIcon/>
                <p>New Products</p>
            </div>

            <div className='address'>
               <LocalPhoneIcon className='phone_icon'/>
               <p>1233-7777</p>
               <span>24/7 support center</span>

            </div>
            
            


        </div>
        <div className='main'>
            <div className='sub1'>
                <h1>Don't miss our daily amazing deals</h1>
                <p>Save up to 60% off on your first order</p>
                <div className='subs_input'>
                    <input type="text" placeholder='Enter your Email address'/>
                    <Button className='subs_but'>Subscribe</Button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Landing
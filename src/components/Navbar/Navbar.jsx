import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logOut } from '../../firebase'

const Navbar = () => {
    
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My list</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search} alt="" className='icons' />
                <p>Children</p>
                <img src={bell} alt="" className='icons' />
                <div className='navbar-profile'>
                    <img src={profile_img} alt="" className='profile' />
                    <img src={caret_icon} alt=""/>
                    <div className='dropdown'>
                        <p onClick={()=>{logOut()}}>Sing Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
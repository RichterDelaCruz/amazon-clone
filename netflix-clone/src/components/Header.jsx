import React from 'react'
import netflixLogo from '../assets/netflix-logo.png'
import './Header.module.css'

function Header() {
    return (
        <div>
            <img src={netflixLogo} alt="Netflix Logo" />
        </div>
    )
}

export default Header

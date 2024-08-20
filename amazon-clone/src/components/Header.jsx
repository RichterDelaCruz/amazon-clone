import React from 'react'
import netflixLogo from '../assets/netflix-logo.png'
import './Header.module.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Header() {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'TV Shows', path: '/tv-shows' },
        { name: 'Movies', path: '/movies' },
        { name: 'New & Popular', path: '/new-popular' },
        { name: 'My List', path: '/my-list' },
        { name: 'Browse by Languages', path: '/browse-languages' }
    ];

    return (
        <div className="flex items-center space-x-9">
            <img className="ml-12 w-[115px]" src={netflixLogo} alt="Netflix Logo" />

            <div>
                <ul className="flex space-x-6 text-white text-sm">
                    {menuItems.map((item, index) => (
                        <li className="transition duration-[2000ms] ease-in-out" key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => (isActive ? 'font-medium' : 'hover:opacity-55')}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <form action="" className="flex items-center space-x-2">
                    <input type="search" placeholder="Search" className="bg-transparent border-b border-white text-white" />
                </form>
            </div>
        </div>
    )
}

export default Header

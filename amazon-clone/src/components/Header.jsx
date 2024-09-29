import React from 'react'
import whiteAmazonLogo from '../assets/white-amazon-logo.png'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-[#131921] flex items-center space-x-9 sticky w-screen">
            <Link to="/" className="block hover:outline hover:outline-white">
                <img className="ml-[1rem] mt-3 mb-2 w-[103px]" src={whiteAmazonLogo} alt="Netflix Logo" />
            </Link>
            <div className="flex items-center w-[90%] md:w-[60%]">
                <input type="text" className="search-input h-9 rounded-l-md w-[100%]" />
                <div className="text-[#131921] bg-[#febd69] !w-9 rounded-r-md text-center">
                    <SearchIcon className="!h-9" />
                </div>
            </div>

            <div className="flex text-white space-x-4 w-96">
                <Link to="/login" className="block hover:outline hover:outline-white">
                    <div className="grid grid-flow-row pb-[20px]">
                        <div className="align-bottom !h-4">
                            <span className="text-xs leading-tight">
                                Hello Guest
                            </span>
                        </div>
                        <div className="align-top !h-2">
                            <span className="font-bold">
                                Sign In
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="grid grid-flow-row pb-[20px]">
                    <div className="align-bottom !h-4">
                        <span className="text-xs leading-tight">
                            Return
                        </span>
                    </div>
                    <div className="align-top !h-2">
                        <span className="font-bold">
                            & Orders
                        </span>
                    </div>
                </div>
                <div className="grid grid-flow-row pb-[20px]">
                    <div className="align-bottom !h-4">
                        <span className="text-xs leading-tight">
                            Your
                        </span>
                    </div>
                    <div className="align-top !h-2">
                        <span className="font-bold">
                            Prime
                        </span>
                    </div>
                </div>
                <div className="grid grid-flow-row">
                    <div className="place-self-center">
                        <ShoppingBasketIcon />
                        <span className="px-2">6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

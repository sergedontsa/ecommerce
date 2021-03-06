import React from 'react'
import {Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg' 

import './header.component.style.scss'

const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            <Link to="/shop" className="option">
                ABOUT
            </Link>
        </div>
    </div>
)

export default Header
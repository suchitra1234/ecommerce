import React from 'react';
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div className="header" >
        <div className="main__header" >

            <div className="navbar__main">
                <Link className="header__link" to="/">Home</Link>
            </div>

            <div className="navbar__links" >
                <Link className="header__link" to="/cart" >About</Link>
                <Link className="header__link" to="/cart" >Contact</Link>
                <Link className="header__link" to="/cart" >products</Link>
                <Link className="header__link" to="/cart" >Cart</Link>
            </div>

        </div>
        </div>
    )
}

export default Header

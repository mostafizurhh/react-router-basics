import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                {/* create active link */}

                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/news'>News</NavLink>

                {/* <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/news'>News</Link> */}
            </nav>

            <h4>Common Header</h4>
            {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
        </div>
    );
};

export default Header;
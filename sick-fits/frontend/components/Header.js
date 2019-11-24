import React from 'react'
import Nav from './Nav'

const Header = () => (
    <>
        <div className="bar"><a href="">Sick Fits</a></div>
        <Nav />
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </>
)

export default Header
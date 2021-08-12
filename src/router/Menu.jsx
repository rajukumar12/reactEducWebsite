import React from 'react'
import {NavLink} from 'react-router-dom'


const Menu=()=>{
    return (
        
        <>
        <div className="main_head">
        
        <NavLink    exact activeClassName="active_class" to="/"     className="come">About Us</NavLink>
        <NavLink activeClassName="active_class " to="/contact"    className="come">Contact Us</NavLink>
        <NavLink    activeClassName="active_class " to="/search" className="come">search</NavLink>
        <NavLink activeClassName="active_class " to="/service"       className="come">services</NavLink>
        <NavLink    activeClassName="active_class " to="/user/Raju/kumar/phone"className="come">User</NavLink>

        </div>
        {/* <br/
        <br/>
    
            <a href="/">About Us</a>
            <a href="/contact"> Contact Us</a> */}
            
        </>
    )
}
export  default Menu;
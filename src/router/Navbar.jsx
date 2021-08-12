import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className=" col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top d-flex justify-content-center align-items-center ">
                            <div className="container-fluid ">
                                <NavLink exact to="/home" className="navbar-brand" to="#"><strong>RajuTechnical</strong></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ml-auto ">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activr_link" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activr_link" className="nav-link" to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact  activeClassName="activr_link" className="nav-link" to="/about">About us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activr_link" className="nav-link" to="/contact">Contact us</NavLink>
                                        </li>
                                       
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar;

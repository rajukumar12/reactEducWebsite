import React from 'react';

import { NavLink } from 'react-router-dom';
const Cards = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="hero" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.define}.</p>
                    <a  href="https://www.w3schools.com/whatis/" target="_blank" className="btn btn-outline-primary mb-1">Go to link</a>
                </div>
            </div>
            </div>

        </>
    )
}
export default Cards;

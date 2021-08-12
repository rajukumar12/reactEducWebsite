import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../images/webimg.png'


const Common = (props) => {
    return (
        <>
            <section id="main_section" >
                <div className="container">
                    <div className=" ">
                        <div className="col-12 mx-auto my-5 d-flex align-items-center"></div>
                        <div className="row row justify-content-between  ">


                            <div className="col-md-5    mx-auto mt-md-5 pt-lg-0 order-2 order-lg-1 my-sm-3 col-10  ">
                                <h1 className="pt-3">{props.name} <br /><strong className="barnd">{props.name_send}</strong> </h1>
                                <h5 className="my-2">{props.abott_tem} </h5>
                                <div className="mt-4">
                                    <NavLink to={props.visit} className="btn btn-outline-success" >{props.btnname}</NavLink>
                                </div>



                            </div>

                            <div className="col-md-5  mx-auto pt-lg-0   order-1 order-lg-2   my-sm-3 col-10 ">

                                <img className="img-fluid animated" src={props.srcimgs} alt="imag" />

                            </div>


                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}
export default Common;

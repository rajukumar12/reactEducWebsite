import React from 'react';
import { NavLink } from 'react-router-dom';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    const year = new Date().getFullYear();
    return <>





        <div className="row mt-5  bg-dark  justify-content-evenly">
            



                <div className=" pt-2  text-center text-white">Copyright &copy; RajuTechnical. All Reserved | Term and Condtion | {year}

                </div>


                <div className="col-md-3  col-8 mx-auto text-light pt-4">
                    <h5 className="pb-4">Developer</h5>
                    <p>Me and my tem awesome developer.Our tem develops web site,Apps and software  </p>
                </div>
                <div className="col-md-3 col-8 mx-auto pt-4 text-light">
                    <h5 className="pb-4">Important links</h5>
                    <p>
                        <NavLink to="/" className="link-light  text-decoration-none">Home</NavLink><br />
                        <NavLink to="/about" className="link-light  text-decoration-none">About us</NavLink><br />
                        <NavLink to="/contact" className="link-light  text-decoration-none">Our Team</NavLink><br />
                        <NavLink to="/contact" className="link-light  text-decoration-none">Our Clients</NavLink>

                    </p>
                </div>
                <div className="col-md-3  col-8 mx-auto pt-4 text-light" >
                    <h5 className="pb-4">Contact us</h5>

                    <p>Azam campus gate-1 <br />
                        hidayatullah 411002 <br /> <i className="bi bi-telephone-fill"></i> <PhoneAndroidIcon /> 7979722721 <br />Email-id: rau96310@gmail.com</p>
                    <h5> <NavLink to="/contact"><EmailIcon /></NavLink>   <NavLink to="/contact"><TelegramIcon /></NavLink>    <NavLink to="/contact"><InstagramIcon /></NavLink>  <NavLink to="/contact"><FacebookIcon /></NavLink>   </h5>
                </div>

            </div>
       


    </>

}
export default Footer;

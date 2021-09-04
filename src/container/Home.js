import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

function Home() {
    return (
        <div className="body">
            {/* Nav section started */}
            {/* Nav section ended */}

            {/* Register-Now to Our vision section started */}
            {/* Register-Now to Our vision section ended */}

            {/* Our Recent Work section started */}
            {/* Our Recent Work section ended */}

            {/* Bring the change to year of EST section started */}
            {/* Bring the change to year of EST section ended */}

            {/* Hear from our alumni section started */}
            {/* Hear from our alumni section ended */}

            {/* Footer section started */}
            <footer className="footer">
        <div className="container">
            <hr> </hr>
            <div className="row">
                <div className="col-md-2">
                    <img src="logo.png"> </img>
                </div>
                <div className="col-md-4">
                    <div className="xyz">
                        <u>Visit Us</u>
                        <div className="address">
                            <div>UPES Energy Acers</div>
                            <div>Bidholi,</div>
                            <div>Dehradun-248007,Uttrakhand,India</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="xyz">
                        <u>Links to Visit</u>
                            <div><a style="color: white" href="https://www.acm.org/">ACM International</a></div>
                            <div><a style="color: white" href="#">ACM India</a></div>
                            <div><a style="color: white" href="#">UPES ACM-W</a></div>
                    </div>
                </div>
                <div className="col-md-1">
                    <br></br>
                    <div className="address">
                        <ul type="none">
                            <li><a href="https://www.instagram.com/upesacm/?hl=en">
                                    <img src="ig.png"></img></a></li> 
                            <br> </br>
                            <li><a href="https://www.facebook.com/upesacm/">
                                    <img src="fb.png"></img></a></li> 
                            <br></br>
                            <li><a href="https://www.linkedin.com/company/upesacm/mycompany/?viewAsMember=true">
                                    <img src="linkedin.png"></img></a></li> 

                        </ul>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.710862751278!2d77.96464421507844!3d30.415944281748644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES%20-%20University%20of%20Petroleum%20and%20Energy%20Studies!5e0!3m2!1sen!2sin!4v1629495834754!5m2!1sen!2sin"
                        style="border:0; width: 100%; height: 204px ;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <br></br>
            <div className="row">
                <hr></hr>
            </div>
        </div>
        <center className="handw">
            Copyright &copy 2021 All rights reserved | Designed and Developed by UPES ACM Web Development Team</center>
    </footer>

            {/* Footer section ended */}
           
        {/* </div>  */}
        </div>
    );
}

export default Home;
import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
import postman from "./postman.svg";
import menu from "./menu.png";


const Navbar =() => {
    return (
        <>
        <div  className="container-fluid nav_bg" >
            <div className='row'>
                <div className="col-md-10 mx-auto">

                <nav className="navbar navbar-expand-lg  ">
                    {/*<div className="container-fluid">*/}
                        <NavLink className="navbar-brand" to="/">
                        <img src={postman} height="50px" style={{cursor:'pointer'}}/>
                        </NavLink>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><img src={menu} height="20px" /></span>
                        
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a 
                                
                                className="nav-link active" aria-current="page" href="https://hackthemountain.tech">HackTheMountain2.0</a>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink 
                                exact
                                className="nav-link" to="#workshop">Workshops</NavLink>
                            </li> */}
                            
                        </ul>
                        {/* </div> */}
                    {/*</div>*/}
                    </nav>
                </div>
            </div>
        </div>


        </>
    )
}

export default Navbar;
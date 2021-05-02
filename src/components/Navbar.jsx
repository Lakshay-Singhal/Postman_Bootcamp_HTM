import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
import postman from "./postman.svg";


const Navbar =() => {
    return (
        <>
        <div  className="container-fluid nav_bg" >
            <div classname='row'>
                <div classname="col-md-12 mx-auto">

                <nav class="navbar navbar-expand-lg  ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                        <img src={postman} height="50px" style={{cursor:'pointer'}}/>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink 
                                exact
                                className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink 
                                exact
                                className="nav-link" to="#workshop">Workshops</NavLink>
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
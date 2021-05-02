import React from 'react';
import web from "./htm.png";
import {NavLink} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";


const Home=() => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div  className="container-fluid">
            <div classname='row'>
                <div classname="col-md-10 mx-auto">
                    <div className='row'>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                        <strong className="brand-name">Hack The Mountains 2.0</strong>
                    </h1>
                    <h2 className="my=3">
                        The Best view comes after the Hardest climb.
                    </h2>
                    <div classname="mt-3">
                        <NavLink to="https://hackthemountain.tech" className="btn-get-started">
                            Start Learning
                        </NavLink>
                    </div>
                    </div>
                    
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid " alt="home img"/>
                    </div>
                    </div>


                </div>
            </div>
        </div>
      </section>
    </>
  )
}


export default Home;

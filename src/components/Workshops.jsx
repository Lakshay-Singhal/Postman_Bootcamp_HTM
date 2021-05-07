import React from 'react';
import thumb from "./9860.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
/*import {useWPs} from "./Airtable";

const Workshop=useWPs();*/

const Workshops = () => {
    return (
        <>
            <section id="workshop">
                <div className="my-5">
                    <h1 className="heading">Workshops</h1>
                </div>
                <div className="container-fluid">
                    <div className='row pb-5'>
                        <div className="col-md-10 mx-auto">
                            <div className='row gy-4'>
                                <div className="col-md-3 col-10 mx-auto">
                                    {/* {Workshops.map((el) => ( 
                                         <div className="card" >
                                            <img src={thumb} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{el.title}</h5>
                                                <p className="card-text">{el.tagline}</p>
                                                <NavLink to="#" className="btn btn-primary">{el.image}</NavLink>
                                            </div>
                                        </div>))} */}
                                        <div className="card" >
                                            <img src={thumb} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Title</h5>
                                                <p className="card-text">Tagline</p>
                                                <NavLink to="#" className="btn btn-primary">Link</NavLink>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={thumb} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Title</h5>
                                                <p className="card-text">Tagline</p>
                                                <NavLink to="#" className="btn btn-primary">Link</NavLink>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={thumb} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Title</h5>
                                                <p className="card-text">Tagline</p>
                                                <NavLink to="#" className="btn btn-primary">Link</NavLink>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={thumb} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Title</h5>
                                                <p className="card-text">Tagline</p>
                                                <NavLink to="#" className="btn btn-primary">Link</NavLink>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Workshops;

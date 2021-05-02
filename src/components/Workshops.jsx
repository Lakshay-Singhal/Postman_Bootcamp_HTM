import React from 'react';
import thumb from "./9860.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {NavLink} from "react-router-dom";
/*import {useWPs} from "./Airtable";

const Workshop=useWPs();*/

const Workshops=() => {
  return (
    <>
    <section id="workshop">
      <div className="my-5">
        <h1 className="heading">Workshops</h1>
      </div>
      <div className="container-fluid mb-5">
            <div classname='row'>
                <div classname="col-md-4 mx-auto">
                    <div className='row gy-4'>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Here comes the tagline</p>
                                <NavLink to="#" className="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={thumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Here comes the tagline</p>
                                <NavLink to="#" class="btn btn-primary">Link</NavLink>
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

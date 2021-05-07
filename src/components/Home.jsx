import React from 'react';
import web from "./htm.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";


const Home=() => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div  className="container-fluid ">
            <div className='row justify-content-center align-items-center'>
                <div className="col-md-10 mx-auto">
                    <div className='row'>
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="row text-center">
                    <h1>
                        <strong className="brand-name">Postman Bootcamp</strong>
                    </h1>
                    <h2 className="my=3">
                        {/* The Best view comes after the Hardest climb. */}
                    </h2>
                    <div className="mt-3">
                        <a href="https://hackthemountain.tech" className="btn-get-started">
                            See Workshops
                        </a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-lg-6 order-1 order-lg-2 header-img text-center">
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

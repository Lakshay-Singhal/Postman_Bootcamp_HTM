import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import Workshops from "./components/Workshops";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {Switch, Route, Redirect} from "react-router-dom";



const App=() => {
  return (
    <>
      <Navbar />
      <Home />
      <Workshops />
      
    </>
  )
}


export default App;

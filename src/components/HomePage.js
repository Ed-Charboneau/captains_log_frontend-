import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';


function HomePage(){
    return(
        <div className="homepage">

        <div className="container">
        

        <h1 className="Title" >Captains Log</h1>

        <p className="comments"> Captains Log App allows a user to keep track of maintiance and repairs.</p>


        <Link to="/Item"><button className="start">Click to start</button></Link> 

        
        </div>

        <div className="small"></div>


        <div className="medium"></div>



        </div>
    )
}

export default HomePage;
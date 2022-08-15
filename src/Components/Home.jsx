import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Home.css";

function Home() {
  return (
    <div className="container-fluid" id="home">
      <div className="row">
        <div className="col-sm-12">
          <div className="homeWrap d-flex flex-column justify-content-center align-items-center">
            <h4>Hii All, It's</h4>
            <h1>ARYANDRUMS</h1>
            <p>Life is not what we Drum up for God, but what He Drums up in Us.</p>
            <a href="#myworks"><button className="btn btn-lg">View Myworks</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
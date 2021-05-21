import React from "react";
import { Link } from "wouter";
import "./index.css";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Fade top cascade>
      <div id="home">
        <h1>MD Digital Solutions</h1>

        <div className="container-cards">
          <Link to="/R1">
            <div className="card">Request One</div>
          </Link>
          <Link to="/R2">
            <div className="card">Request Two</div>
          </Link>
          <Link to="/R3">
            <div className="card">Request Three</div>
          </Link>
        </div>
      </div>
    </Fade>
  );
}

export default Home;

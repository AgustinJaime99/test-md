import React from "react";
import { Link } from "wouter";
import Fade from "react-reveal/Fade";
import "./index.css";

function NotFound() {
  return (
    <Fade>
      <h1 className="title-error">Error 404 this page not found</h1>
      <h2>
        Go to{"   "}
        <Link to="/" className="sub-title-error">
          home
        </Link>
      </h2>
    </Fade>
  );
}

export default NotFound;

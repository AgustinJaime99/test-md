import React, { useState } from "react";
import "./index.css";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { Link } from "wouter";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(128, 128, 128, 0.714)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function RequestTwo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="container">
        <Zoom cascade>
          <img
            className="music"
            onClick={() => setOpen(true)}
            src="https://i.ytimg.com/vi/uKSAqOZpaQs/maxresdefault.jpg"
            alt="music"
          />
          <div className="textContainer">
            <h2 className="title">
              Eleifend facilisis senectus eros id praesent dis natoque, justo
              parturient hac risus odio enim habitasse augue
            </h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit massa
              primis, arcu magnis ultricies litora aliquam blandit turpis
              pretium, gravida facilisis porta inceptos nibh nascetur urna
              lectus. Luctus aenean viverra sagittis ornare tempus litora orci
              lacinia parturient, hac primis egestas dictum fringilla curae
              malesuada lectus risus, nisi nec sodales dignissim hendrerit
              ultrices rhoncus eleifend. Imperdiet pharetra dignissim vivamus
              est class pulvinar integer magnis, massa magna laoreet aptent
              ornare fringilla neque torquent commodo, bibendum ultricies tellus
              ultrices montes mi facilisis.Pulvinar maecenas leo vel feugiat
              porttitor lacinia felis accumsan cursus, orci integer taciti
              interdum tellus sollicitudin quisque ligula imperdiet, nisl at
              rutrum dictumst curabitur eros vivamus justo, pretium platea non
              taciti habitant tellus. Mattis malesuada phasellus ante gravida
              semper penatibus dictumst senectus ac, dapibus venenatis eget cum
              aenean nullam fames.
            </p>
          </div>
        </Zoom>
      </div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=uKSAqOZpaQs"
          className="video"
        />
      </Modal>
      <Fade>
        <div className="navigate">
          <Link to="/R1">
            <div className="btn-prev">Return to request</div>
          </Link>
          <Link to="/">
            <div className="btn">Go home</div>
          </Link>
          <Link to="/R3">
            <div className="btn-next">Go to next request</div>
          </Link>
        </div>
      </Fade>
    </div>
  );
}

export default RequestTwo;

import React from "react";
import { Link } from "wouter";
import Fade from "react-reveal/Fade";

import "./index.css";

function requestOne() {
  return (
    <Fade bottom>
      <>
        <div class="divTable table">
          <div class="divTableHeading">
            <div class="divTableRow">
              <div class="divTableHead">Title</div>
              <div class="divTableHead">Number</div>
              <div class="divTableHead">String</div>
              <div class="divTableHead">Object</div>
              <div class="divTableHead">Array</div>
              <div class="divTableHead">Null</div>
            </div>
          </div>
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">24</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">33</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">0</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">72</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">25</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">47</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">2</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">14</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">27</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">13</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">Lorem</div>
              <div class="divTableCell">17</div>
              <div class="divTableCell">amet consectetur </div>
              <div class="divTableCell">adipiscing elit, nibh sociis</div>
              <div class="divTableCell">elementum nullam libero</div>
              <div class="divTableCell">-</div>
            </div>
          </div>
        </div>

        <div className="navigate">
          <Link to="/">
            <div className="btn-prev">Go home</div>
          </Link>
          <Link to="/R2">
            <div className="btn-next">Go to next request</div>
          </Link>
        </div>
      </>
    </Fade>
  );
}

export default requestOne;

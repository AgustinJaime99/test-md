import React, { useState } from "react";
import { Link } from "wouter";
import getData from "../../utils/getData";
import Swal from "sweetalert2";
import Fade from "react-reveal/Fade";
import "./index.css";

function RequestThree() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (data.length === 0) {
      const promise = Promise.resolve(getData(search));
      promise.then((val) => {
        setData((oldData) => [...oldData, val]);
      });
      Swal.fire("Success!", "", "success");
    }
    if (data.length > 0) {
      let map = data.map((i) => i.name.toLowerCase() === search.toLowerCase());
      if (map.includes(true)) {
        Swal.fire("Error!", "The city is already in table", "error");
      } else {
        const promise = Promise.resolve(getData(search));
        promise.then((val) => {
          if (val) {
            setData((oldData) => [...oldData, val]);
            Swal.fire("Success!", "", "success");
          } else {
            Swal.fire("Error!", "The city was not found", "error");
          }
        });
      }
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Fade>
      <div>
        <div class="divTable table">
          {data.length > 0 ? (
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">City</div>
                <div class="divTableHead">country</div>
                <div class="divTableHead">Temperature</div>
                <div class="divTableHead">Humidity</div>
                <div class="divTableHead">Precip</div>
                <div class="divTableHead">Wind direction</div>
                <div class="divTableHead">Wind speed</div>
              </div>
            </div>
          ) : (
            <> </>
          )}

          {data &&
            data.map((res) => (
              <div class="divTableBody">
                <div class="divTableRow">
                  <div class="divTableCell">{res.name}</div>
                  <div class="divTableCell">{res.country}</div>
                  <div class="divTableCell">{res.temperature}º</div>
                  <div class="divTableCell">{res.humidity}%</div>
                  <div class="divTableCell">{res.precip}%</div>
                  <div class="divTableCell">{res.wind_dir}</div>
                  <div class="divTableCell">{res.wind_speed} Km/h</div>
                </div>
              </div>
            ))}
        </div>

        <form onSubmit={handleSumbit} className="formContainer">
          <input
            required
            className="labelSearch"
            placeholder="Find a city"
            type="text"
            value={search}
            onChange={handleChange}
          ></input>
          <button class="btn-form">Search</button>
        </form>
      </div>
      <div className="navigate">
        <Link to="/R2">
          <div className="btn-prev">Return to request</div>
        </Link>
        <Link to="/">
          <div className="btn-next">Go home</div>
        </Link>
      </div>
    </Fade>
  );
}

export default RequestThree;

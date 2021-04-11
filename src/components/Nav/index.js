import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiFillFire,
  AiFillHome,
  AiOutlineFire,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import {
  RiMovie2Line,
  RiMovie2Fill,
  RiSlideshow3Fill,
  RiSlideshow3Line,
} from "react-icons/ri";

import "./styles.css";

function Nav() {
  const [active, setActive] = useState("Home");

  useEffect(() => {}, []);

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/551px-Netflix_2015_N_logo.svg.png"
            alt="user"
            width="40px"
          />
        </div>
        <div className="nav-items">
          <div
            className="nav-link"
            onClick={() => {
              setActive("Home");
            }}
          >
            <h1>{active === "Home" ? <AiFillHome /> : <AiOutlineHome />}</h1>
            Home
          </div>
          <div
            className="nav-link"
            onClick={() => {
              setActive("TV");
            }}
          >
            <h1>
              <h4>
                {active === "TV" ? <RiSlideshow3Fill /> : <RiSlideshow3Line />}
              </h4>
            </h1>
            TV Shows
          </div>
          <div
            className="nav-link"
            onClick={() => {
              setActive("Movies");
            }}
          >
            <h1>{active === "Movies" ? <RiMovie2Fill /> : <RiMovie2Line />}</h1>
            Movies
          </div>
          <div
            className="nav-link"
            onClick={() => {
              setActive("Popular");
            }}
          >
            <h1>{active === "Popular" ? <AiFillFire /> : <AiOutlineFire />}</h1>
            New &amp; Popular
          </div>
          <div
            className="nav-link"
            onClick={() => {
              setActive("List");
            }}
          >
            <h1>{active === "List" ? <AiFillStar /> : <AiOutlineStar />}</h1>
            My List
          </div>
        </div>
      </div>
      <div className="nav-items">
        {/* <div className="nav-link">Search</div>
        <div className="nav-link">Gift</div>
        <div className="nav-link">Notifs</div> */}
        <div className="nav-link">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="user"
            width="40px"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineFire,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { RiMovie2Line } from "react-icons/ri";

import "./styles.css";

function Nav() {
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
          <div className="nav-link">
            <h1>
              <AiFillHome />
              {/* <AiOutlineHome /> */}
            </h1>
            Home
          </div>
          <div className="nav-link">
            <h1>
              <FiMonitor />
            </h1>
            TV Shows
          </div>
          <div className="nav-link">
            <h1>
              <RiMovie2Line />
            </h1>
            Movies
          </div>
          <div className="nav-link">
            <h1>
              <AiOutlineFire />
            </h1>
            New &amp; Popular
          </div>
          <div className="nav-link">
            <h1>
              <AiOutlineUnorderedList />
            </h1>
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

import React from "react";
import {Link} from "react-router-dom";

const Nav = props => (
  <div>
    <nav className="navbar" style={{ backgroundColor: "#333" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <img
              src="https://i.imgur.com/znLtnF1.png"
              alt="banner"
              style={{ height: "70px" }}
            />
          </Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link
            to="/login"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <button className="btn btn-dark">Login</button>
          </Link>
          <a
            href="/saved"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <button className="btn btn-dark">Saved Resorts</button>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

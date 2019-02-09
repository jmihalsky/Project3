import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar" style={{ backgroundColor: "#333" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a
            href="/"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <img src="./banner.png" alt="banner" style={{ height: "70px" }} />
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a
            href="/login"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <button className="btn btn-dark btn-lg">Login</button>
          </a>
          <a
            href="/saved"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <button className="btn btn-dark btn-lg">Saved Resorts</button>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

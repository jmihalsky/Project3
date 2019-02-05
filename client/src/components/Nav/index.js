import React from "react";

const Nav = props => (
  <div>
    <nav
      className="navbar fixed-top"
      style={{
        marginBottom: "40px",
        backgroundColor: "royalblue",
        height: "50px"
      }}
    >
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a
            href="/"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Snow Routes
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a
            href="/savedbooks"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            <button className="btn btn-dark">Saved Books</button>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

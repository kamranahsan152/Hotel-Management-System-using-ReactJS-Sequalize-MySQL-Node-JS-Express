import "../style/nav.css";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../main/App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const Rendermenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item ">
            <NavLink
              activeClassName="active"
              exact
              to="/"
              className="nav-link nav-custom"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/rooms"
              className="nav-link nav-custom"
            >
              Our Rooms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/about"
              className="nav-link nav-custom"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/contact"
              className="nav-link nav-custom"
            >
              Contact Us
            </NavLink>
          </li>
          {/* <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  exact
                  to="/logout"
                  className="nav-link nav-custom"
                >
                  Logout
                </NavLink>
              </li> */}
          <div className="nav-item dropdown">
            <button
              type="button"
              className="nav-acc btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
            >
              Profile
            </button>
            <div className="dropdown-menu">
              <NavLink
                activeClassName="active"
                exact
                to="/logout"
                className="dropdown-item font-weight-bold account"
              >
                Logout
              </NavLink>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item ">
            <NavLink
              activeClassName="active"
              exact
              to="/"
              className="nav-link nav-custom"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/rooms"
              className="nav-link nav-custom"
            >
              Our Rooms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/about"
              className="nav-link nav-custom"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
              to="/contact"
              className="nav-link nav-custom"
            >
              Contact Us
            </NavLink>
          </li>
          <div className="nav-item dropdown">
            <button
              type="button"
              className="nav-acc btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
            >
              Account
            </button>
            <div className="dropdown-menu">
              <NavLink
                activeClassName="active"
                exact
                to="/login"
                className="dropdown-item font-weight-bold account"
              >
                Login
              </NavLink>
              <NavLink
                activeClassName="active"
                exact
                to="/signup"
                className="dropdown-item font-weight-bold account"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container nav-bottom">
        <nav className="navbar navbar-light fixed-top shadow-lg shadow">
          <a className="nav-brand navbar-brand" href="/">
            <span className="nk-custom">NK</span>
            <span className="h-custom">HOTEL</span>
          </a>
          <div className="navbar" id="navbarSupportedContent">
            <ul className="nav ">
              <Rendermenu />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

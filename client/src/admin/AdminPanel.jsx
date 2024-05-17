import React from "react";
import "./admin.css";
import logout from "../icons/Logout_144px.png";
import dash from "../icons/dashboard_96px.png";
import add from "../icons/room_480px.png";
import { NavLink } from "react-router-dom";

const AdminPanel = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between bg-light shadow">
        <nav className="navbar  text-primary p-3">
          <h3 className="font-custom display-6 p-2 fw-bold">Admin Panel</h3>
        </nav>
        <div className="d-flex p-3 ">
          <h3 className="font-custom text-primary fw-bold p-3 bg-l">
            <span>
              <img src={logout} className="icon-area" alt="img" />
            </span>{" "}
            Logout
          </h3>
        </div>
      </div>
      <div className="d-block" >
        <div className="row ">
          <div className="col-md-2 side-area p-5   bg-primary shadow " style={{height:"110vh"}}>
            <NavLink exact to="/dashboard" className="text-decoration-none">
              <h3 className="p-3 text-white fw-bold">
                {" "}
                <span>
                  <img src={dash} className="icon-area pr-3" alt="img" />
                </span>
                Dashboard{" "}
              </h3>{" "}
            </NavLink>

            <NavLink exact to="/add" className="text-decoration-none ">
              <h3 className="p-3 text-white fw-bold">
                {" "}
                <span>
                  <img src={add} className="icon-area pr-3" alt="img" />
                </span>
                Rooms
              </h3>
            </NavLink>

          </div>
          <div className="col-lg-10 p-5">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;

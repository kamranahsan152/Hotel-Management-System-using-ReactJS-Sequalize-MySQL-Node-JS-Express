import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import google from "../icons/google_48px.png";
import Footer from "./Footer";
import bg from "../icons/login.gif";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../main/App";
import Navbar from "./Navbar";
function Login() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const history = useNavigate();

  const { dispatch } = useContext(UserContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmit, setisSubmit] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = res.json();

    if (res.status === 401 || !data) {
      setisSubmit(false);
    } else {
      setisSubmit(true);
      Submitcheck();
      dispatch({ type: "USER", payload: true });
      setTimeout(() => {
        history("/");
      }, 10000);
    }
  };
  const Submitcheck = () => {
    if (isSubmit === true) {
      return (
        <div
          className="p-3 alert-success mb-3 text-center"
          style={{ borderRadius: "30px" }}
          role="alert"
        >
          You have been successfully Logged-in!
          {history("/")}
        </div>
      );
    }
    if (isSubmit === false) {
      return (
        <div
          className="alert-danger p-3 mb-3 text-center"
          style={{ borderRadius: "30px" }}
          role="alert"
        >
          Invalid username and password
        </div>
      );
    }
  };
  return (
    <>
      <Navbar />

      <div className="container custom-container mb-4" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <h2 className=" font-weight-bold">Login to an Account</h2>
                <p className="hint-text">
                  Login with your google email address
                </p>
                <div className="social-btn text-center">
                  <a
                    href="/"
                    className="btn btn-light text-black-50 btn-lg font-weight-bolder"
                  >
                    <img src={google} alt={google} /> Google
                  </a>
                </div>
                <div className="or-seperator">
                  <b>or</b>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-lg"
                    name="username"
                    placeholder="username"
                    required="required"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input-lg"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div>{Submitcheck()}</div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block signup-btn"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center">
                Create an Account?{" "}
                <a href="/signup" className="text-danger">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="col img-section" data-aos="fade-up">
            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              src={bg}
              className="img-fluid"
              alt={""}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

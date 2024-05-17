import React, { useEffect, useState } from "react";
import "../style/signup.css";
import google from "../icons/google_48px.png";
import Footer from "./Footer";
import bg from "../icons/Queue.gif";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function SignUp() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });



  const [isSubmit, setisSubmit] = useState(null);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmpassword,
      }),
    });

    const data = res.json();

    if (res.status === 422 || !data) {
      setisSubmit(false);
    } else {
      setisSubmit(true);
    }
    // axios
    //   .post("http://localhost:5000/signup", {
    //     username: username,
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //    console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const Submitcheck = () => {
    if (isSubmit === true) {
      return (
        <div
          className="p-3 alert-success mb-3 text-center"
          style={{ borderRadius: "30px" }}
          role="alert"
        >
          You have been successfully registered!
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
          404 error occurred
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
              <form onSubmit={handleSubmit} method="POST">
                <h2 className=" font-weight-bold">Create an Account</h2>
                <p className="hint-text">
                  Sign up with your google email address
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
                    placeholder="Username"
                    required="required"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control input-lg"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input-lg"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input-lg"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    required="required"
                    value={user.confirmpassword}
                    onChange={handleInput}
                  />
                </div>
                <div>{Submitcheck()}</div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block signup-btn"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="text-center">
                Already have an account?{" "}
                <a href="/login" className="text-danger">
                  Login here
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

export default SignUp;

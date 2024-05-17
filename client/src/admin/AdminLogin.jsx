import gifIcon from "../icons/background.gif";
import adminIcon from "../icons/administrative_tools_480px.png";
// import loginIcon from "../icons/login_500px.png";
import { useState } from "react";
import eyeSlash from "../icons/eyeslash.png";
import eye from "../icons/eye_25px.png";

const Login = () => {
  const [passwordType, setpasswordType] = useState("passsword");
  const [passswordInput, setpasswordInput] = useState("");

  const handleChange = (e) => {
    setpasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setpasswordType("text");
    } else {
      setpasswordType("password");
    }
  };
  return (
    <>
      <section className="secBack h-custom">
        <div className="container-fluid">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xs-5 col-md-10 col-lg-6">
                <img src={gifIcon} alt="Background" className="img-fluid" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                  <h1 className="display-5 font-weight-normal">
                    Admininstrator
                  </h1>
                  <div className="divider w-100 d-flex align-items-center my-4">
                    <img
                      src={adminIcon}
                      className="img-fluid adminIcon"
                      alt=""
                    />
                  </div>
                  <form className="mt-5 mb-5" action="/admin" method="post">
                    <div className="form-group mb-4">
                      <label htmlFor="adminCode">Admin Code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg w-100"
                        placeholder="Enter Admin-Code"
                        id="admin"
                        name="adminCode"
                      />
                      <small className="form-text text-danger validity"></small>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Password</label>

                      <div className="input-group">
                        <input
                          type={passwordType}
                          id="password"
                          name="password"
                          value={passswordInput}
                          placeholder="Enter Password"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                        />
                        <div
                          class="input-group-append"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <span className="input-group-text">
                              <img src={eyeSlash} alt={eyeSlash} />
                            </span>
                          ) : (
                            <span className="input-group-text">
                              <img src={eye} alt={eye} />
                            </span>
                          )}
                        </div>
                      </div>
                      <small className="form-text text-danger validity"></small>
                    </div>
                    <div className="lead text-center">
                      <small className="alert-danger p-2 rounded d-none isValid"></small>
                    </div>
                    <div className="mt-4 pt-2 d-flex">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg loginBtn w-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div
          className="d-flex flex-column flex-md-row text-center text-md-start
        justify-content-between p-2 px-1 px-xl-4 bg-primary"
        >
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;

import React from "react";
import "../style/footer.css";
import facebook from "../icons/Facebook_48px.png";
import twitter from "../icons/twitter_48px.png";
import insta from "../icons/Instagram_48px.png";

function Footer() {
  return (
    <>
      <footer className="nb-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about">
                <img
                  src="images/logo.png"
                  className="img-responsive center-block"
                  alt=""
                />
                <p>
                 Our services are also available in social media to compite the other organization, free to contact in these platforms
                </p>
                <div className="social-media">
                  <ul className="d-flex justify-content-center list-unstyled">
                    <li>
                      <a href="/" title="">
                        <img src={facebook} alt={facebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <img src={twitter} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <img src={insta} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Help Center</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" title="">
                      {" "}
                      How to Pay
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Verified
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Customer information</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/about" title="">
                      {" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Facilities
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Booking Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/contact" title="">
                      {" "}
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Authentication Process
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Security & privacy</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" title="">
                      {" "}
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Return / Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      {" "}
                      Payment Secure
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Payment</h2>
                <ul className="list-unstyled text-info">
                  <li>Visa</li>
                  <li>Cash on delivery</li>
                  <li>MasterCard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="copyright p-0 bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-white">Copyright © 2023. NK Hotel.</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;

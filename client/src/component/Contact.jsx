import React, { useEffect } from "react";
import Footer from "./Footer";
import bg  from "../images/Contact us.gif"
import "../style/contact.css"
import AOS from 'aos';
import 'aos/dist/aos'
import Navbar from "./Navbar";


function Contact() {

    useEffect(()=>{
        AOS.init({duration: 2000})
    })
  return (
    <>
        <Navbar />

    <div className="container custom-container mb-4">
    <div className="container p-5" data-aos="fade-up">
        <div className="text-center">
          <label className="contact-tag">Contact US</label>
        </div>
      </div>
      <div className="container  pr-5" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-3 col-lg-4">
                <h3 className="heading mb-4 font-weight-bolder">Let's talk about everything!</h3>
                <p>
                  Please send your feedback about our services, in regards
                </p>
                <p>
                  <img src={bg} alt={bg} className="img-fluid" />
                </p>
              </div>
              <div className="col-md-3 col-lg-4">
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 frm form-group ">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control  form-control-lg"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control  form-control-lg"
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary btn-custom shadow py-2 px-4"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success"></div>
              </div>
              <div class="col-md-3 col-lg-3">
                  <div class="map_main">
                     <div class="map-responsive">

                        <iframe className="frame" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="350" height="490" frameborder="0"  allowfullscreen="" title="map"></iframe>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
    </div>


    
        {/* <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary">Send</a>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Contact;

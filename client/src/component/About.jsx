import React, { useEffect } from "react";
import room from "../icons/room_1000px.png";
import staff from "../icons/staff.png";
import review from "../icons/review.png";
import customer from "../icons/customer.png";
import bg from "../icons/about.gif";
import "../style/about.css";
import kamran from "../images/Kamran.jpg";
import nouman from "../images/Nouman1.png";
import facebook from "../icons/faceblack.png";
import whatsapp from "../icons/whatsapp_48px.png";
import linkin from "../icons/linkedin_48px.png";
import insta from "../icons/instablack.png";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    console.log("useEffect called");
  }, []);

  return (
    <>
        <Navbar />

      <div className="my-5 px-4" data-aos="fade-up">
        <div className="container">
          <div className="text-center">
            <label className="about-tag">ABOUT US</label>
          </div>
          <div className="d-flex justify-content-center text-center">
            <p className="mt-1 text-justify">
              Kamran ahsan are the Founder of this website, they are
              university students & got idea of making a reliable Hotel
              Management System to manipulate the autherities, moreover they
              started their project to evaluate the real life problems faced by
              many people, so that this software can fix all possible problems
              as well. The honesty. Here is a man with great respect for wood
              and handcrafted sculptures that “tell a story and testify to the
              richness of one of our most precious resources.” His website is
              light, easy to read, and filled with inspiring quotes and photos
              of his labors of love.
            </p>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <label className="about-h">About Hotel</label>
            <p>
              Everybody wants to be famous, but nobody wants to do the work. I
              live by that. You grind hard so you can play hard. At the end of
              the day, you put all the work in, and eventually, it’ll pay off.
              It could be in a year, it could be in 30 years. Eventually, your
              hard work will pay off.” – Kevin Hart
            </p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <img src={bg} alt={bg} className=" img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
              <img src={room} alt={room} width="70px" />
              <h4 className="mt-3">100+</h4>
              <h4>ROOMS</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
              <img src={customer} alt={customer} width="70px" />
              <h4 className="mt-3">100+</h4>
              <h4>CUSTOMERS</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
              <img src={review} alt={review} width="70px" />
              <h4 className="mt-3">150+</h4>
              <h4 className="text-uppercase">Reviews</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
              <img src={staff} alt={staff} width="70px" />
              <h4 className="mt-3">200+</h4>
              <h4>STAFF</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5" data-aos="slide-up">
        <label className="about-tag">MANAGEMENT TEAM</label>
      </div>

      <div
        className='mb-5 justify-content-center text-center align-item-center container d-flex'
        data-aos="fade-up"
      >
            <div className="card bg-white shadow">
              <img
                src={kamran}
                className="card-img-top img"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h4 className="card-title mb-1 float-left font-weight-bold ">
                  Founder
                </h4>
                <div className="card-text text-black-50 ">
                  <p className="float-right pr-4">5 years</p>
                </div>
                <h5 className="mt-5  text-left text-muted">CEO</h5>
                <h6 className="mb-2 font-weight-bold ">CONNECT</h6>
                <div className="d-flex  justify-content-center">
                  <ul className=" list-unstyled d-flex">
                    <li>
                      <a href="/facebook">
                        <img src={facebook} alt={facebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/facebook">
                        <img src={linkin} alt={facebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/facebook">
                        <img src={insta} alt={facebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/facebook">
                        <img src={whatsapp} alt={facebook} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;

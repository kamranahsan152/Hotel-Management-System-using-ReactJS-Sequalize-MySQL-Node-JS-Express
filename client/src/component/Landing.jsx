import React from "react";
import "../style/landing.css";
// import img1 from "../images/bg-imgs.png";
// import img2 from "../images/bedroom2.jpg";
import image from "../images/gallery-4.jpg";
import image2 from "../images/gallery-3.jpg";
import hotel1 from "../images/hotel-1.webp";
import hotel2 from "../images/hotel-2.webp";
import hotel3 from "../images/hotel-3.webp";
import hotel4 from "../images/hotel-4-large.webp";
import hotel5 from "../images/hotel-5.webp";
import hotel6 from "../images/hotel-6.webp";
import checkSquare from "../images/check-square.svg";
import Footer from "./Footer";
import Slider from "./slider/Slider.jsx";
import Services from "./Services";
import Faculities from "./Faculities";
import Navbar from "./Navbar";


const Landing = () => {
  return (
    <>
    
    <Navbar />

      <Slider />

      <div className="my-5 px-4 content-area" data-aos="fade-up">
        <div className="container content-area">
          <div className="row">
            <div className="col-lg-5 text-center">
              <label className="page-header">ABOUT US</label>
              <div className="d-flex">
                <p className="text-justify mb-5 p-4">
                  Kamran and Nouman are the Founder of this website, they are
                  university students & got idea of making a reliable Hotel
                  Management System to manipulate the autherities, moreover they
                  started their project to evaluate the real life problems faced
                  by many people, so that this software can fix all possible
                  problems as well.
                </p>
              </div>
              <button className="btn-custom">
                <a href="/about" className="text-decoration-none text-white">Read More</a>
              </button>
            </div>
            <div className="col-lg-7 p-2">
              <div className="row  mt-5">
                <div className="col-lg-6 p-3 ">
                  <img src={image} alt="one" className="bor shadow" />
                </div>
                <div className="col-lg-6 p-3">
                  <img src={image2} alt="sec" className="bor shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <section className="special-offers pt-4" >
        {/* Top Text */}
        <div className="container" data-aos="fade-up">
          <h2 className="page-header page">
            Simplicity is the ultimate <br />
            Watchword
          </h2>
          <div className="row center-lg">
            <div className="col-lg-5 image-col right-marg ">
              <img src={hotel1} alt={hotel1} className="small-image shadow" />
              <img src={hotel2} alt={hotel2} className="small-image shadow" />
              <img src={hotel3} alt={hotel3} className="small-image img-hide shadow" />
              <div className="side-by-side-container">
                <div className="large-image-container">
                  <img src={hotel4} alt={hotel4} className="large-image shadow" />
                </div>
                <section className="stacked-image-container">
                  <div>
                    <img src={hotel5} alt={hotel5} className="small-image shadow" />
                  </div>
                  <div>
                    <img src={hotel6} alt={hotel6} className="small-image shadow" />
                  </div>
                </section>
              </div>
            </div>
            <div className="col-md-5">
              <p className="offers-sub-title  text-justify">
                The fact that we are run by hospitality professionals
                <br />
                and equipped with the world best interior designers <br /> is
                why our rooms and suites are second to none in <br />
                the universe
              </p>
              <ul className="offers-list">
                <li>
                  <div>
                    <img
                      src={checkSquare}
                      alt={checkSquare}
                      className="list-icon"
                    />
                    <p className="list-text">Standard Room</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src={checkSquare}
                      alt={checkSquare}
                      className="list-icon"
                    />
                    <p className="list-text">Executive Room</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src={checkSquare}
                      alt={checkSquare}
                      className="list-icon"
                    />
                    <p className="list-text">King Suite</p>
                  </div>
                </li>
              </ul>
              <a
                href="/rooms"
                className="btn-custom text-white text-decoration-none"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Faculities />
      {/* {
const services = [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      }
    ]

  } */}

      <Footer />
      {/* <section className="hero-section">
        <div className="container">
          <div className="row">

            <div className=" col-lg-7 mt-5 align-content-center">
              <div className="hero-text mt-5">
                <h1 className="mt-5 w-100">NKHOTEL A Luxury Hotel</h1>
                <p>
                  Here are the best hotel booking sites, including
                  recommendations for international travel and for finding
                  low-priced hotel rooms.
                </p>
                <a href="/" className="primary-btn">
                  Discover Now
                </a>
              </div>
            </div>

            <div className="col-lg-5 shadow frm p-5 mt-5">
              <div className="booking-form">
                <h2 className="mb-4 font-weight-bold">Booking Your Hotel</h2>
                <form action="/">
                  <div className="check-date mb-2">
                    <label htmlFor="date-in">Check In</label>
                    <input
                      type="date"
                      className="form-control frm bg-light pr-2"
                      id="date-in"
                    />
                    <i className="icon_calendar" />
                  </div>
                  <div className="check-date mb-2">
                    <label htmlFor="date-out">Check Out</label>
                    <input
                      type="date"
                      className="form-control frm bg-light pr-2 "
                      id="date-out"
                    />
                    <i className="icon_calendar" />
                  </div>
                  <div className="select-option mb-2">
                    <label htmlFor="guest">Adults</label>
                    <select className="browser-default custom-select">
                      <option selected value="0">
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="select-option mb-2">
                    <label htmlFor="guest">Children</label>
                    <select className="browser-default custom-select">
                      <option selected value="0">
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="select-option mb-2">
                    <label htmlFor="room">Room</label>
                    <select className="browser-default custom-select">
                      <option selected value="0">
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="col-lg-1 mb-3 mt-4 pl-1">
                    <button className="btn text-white w-custom">Check</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="container">
        <div className="row ">
          <div className="col-lg-12 bg-white custom-container p-3 rounded">
            <h5 className="col-lg-4">Check Booking Availability</h5>
            <form>
              <div className="row align-items-end">
                <div className="col-lg-3 mb-3 mt-3">
                  <label className="form-label ml-3">Check-in</label>
                  <input type="date" className="form-control shadow-none" />
                </div>
                <div className="col-lg-3 mb-3">
                  <label className="form-label">Check-in</label>
                  <input type="date" className="form-control shadow-none" />
                </div>
                <div className="col-lg-2 mb-3">
                  <label className="form-label">Adult</label>
                  <select className="browser-default custom-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="col-lg-2 mb-3">
                  <label className="form-label">Children</label>
                  <select className="browser-default custom-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-lg-1 mb-3">
                  <button className="btn text-white w-custom">Check</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
};

export default Landing;

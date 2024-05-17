import React from 'react'
import { Col} from "antd";
import { NavLink } from 'react-router-dom';

const Cards = props => {
  return (
    <>
                <Col lg={5/2}>
                    <div
                      className="card  shadow px-3 py-3 card-src"
                      key={props.roomID}
                    >
                      <div className="view overlay">
                        <img
                          className="card-img-top img-new"
                          src={props.image}
                          alt={props.image}
                        />
                        <a href="#!">
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title p-1 h3 fw-bold">
                          {props.roomName}
                        </h4>
                        <h5 className="fw-bold p-1">
                          Room Type:{" "}
                          <span className="ml-2 fw-light">{props.roomType}</span>{" "}
                        </h5>
                        <p className="card-text p-1">
                          <h5 className="fw-bold">Description</h5>{" "}
                          {props.description}
                        </p>
                        <span style={{color:"grey", fontSize: "18px"}}><s>RS {props.oldprice}</s></span>
                        <h6 className="fw-bold p-1">
                          <span className="text-danger fw-bold h4">
                            RS {props.price}
                          </span>
                        </h6>
                        <button
                          type="button"
                          className="btn btn-danger p-3 m-1"
                        >
                          Book Now
                        </button>
                        <button
                          type="button"
                          
                          className="btn btn btn-outline-danger p-3 m-1"
                        >
                        <NavLink   to={`/rooms/details/${props.roomID}`} 
                        
                        className="text-decoration-none  text-black-50"
                        >
                          View Details

                        </NavLink>
                        </button>
                      </div>
                    </div>
                </Col>
    </>
  )
}

export default Cards

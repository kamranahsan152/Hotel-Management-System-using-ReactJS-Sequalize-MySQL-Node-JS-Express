import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "../style/room.css"
import { Row } from "antd";
import Navbar from "./Navbar";
// import { Container, Row, Col, Card } from "react-bootstrap";
import Cards from "./room_cards/Cards";
import axios from "axios";
function Room() {
  const [data, setalldata] = useState([])

  const [search, setsearch] = useState("");



  const getRoomData = async () => {
    const { data } = await axios.get("/getRooms");
    setalldata(data);
  };

  useEffect(() => {
    getRoomData();
  });

  return (
    <>
        <Navbar />

      <section
        style={{
          height: "100vh",
        }}
      >
        <div className="container mt-2">
          <h2 className="page-header">
            <br />
            Our Rooms
          </h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-lg-3 bg-white custom-container p-3 shadow w-100 ">
            <h5 className="p-2 h4 fw-bold">Check Booking Availability</h5>
            <form className="d-flex">
              <div className="col-lg-12 mb-3">
                <label className="form-label">Room Type</label>
                {/* <input
                  type="text"
                  name=""
                  id=""
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                /> */}
                <select
                  value={search}
                  name="roomType"
                  onChange={(e) => setsearch(e.target.value)}
                  className="browser-default custom-select"
                >
                  <option value="NULL">Select</option>
                  <option value="Double Bed">Double Bed</option>
                  <option value="Triple Bed">Triple Bed</option>
                  <option value="Single Bed">Single Bed</option>
                </select>
              </div>

              {/* <div className="col-lg-4 mb-3">
                <button
                  type="submit"
                  className="btn btn-danger w-100 check"
                  onClick={handlecheck}
                >
                  Check
                </button> 
              </div> */}
            </form>
          </div>
        </div>
        <div className="container-area  pl-3">
          <Row gutter={24}>
            {data
              ?.filter((filterBus) => {
                return filterBus.roomType.toString().includes(search);
              })
              .map((room, index) => {
                return (
                  <>
                    <Cards
                      roomID={room.roomID}
                      roomName={room.roomName}
                      roomType={room.roomType}
                      description={room.description}
                      oldprice={room.oldprice}
                      price={room.price}
                      image={room.image}
                    />
                  </>
                );
              })}
            {/* <>
                <div className="notcontain">
                  <h3 className="display-5 text-center text-danger">
                    Rooms aren't available
                  </h3>
                  <img
                    src={notavail}
                    alt="no record"
                    className="img-fluid img"
                  />
                </div>
              </> */}
          </Row>
        </div>
        <Footer />
      </section>

      {/* <Container className="justify-content-center p-2" data-aos="fade-up">
        <h1 className="text-center">Our Rooms</h1>
        <hr />
        <Row>
          {data.map((product) => {
            return (
              <Col md={6} lg={4} sm={12} key={product.id}>
                <Card
                  className="shadow-lg m-2 p-3 rounded-5"
                  style={{ width: "18rem" }}
                >
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>Title: {product.roomName}</Card.Title>
                    <Card.Title>Type: {product.roomType}</Card.Title>
                    <Card.Title>Price: ${product.price}</Card.Title>
                    <Card.Text>
                      Description: {product.description}
                      ...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container> */}
    </>
  );
}

export default Room;

import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "../style/room.css";
import { Row, Col } from "antd";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
// import { Container, Row, Col, Card } from "react-bootstrap";
function Room() {
  const [props, setalldata] = useState({});

  // const getAllRooms = async () => {
  //   const res = await axios.get("http://localhost:5000/getRooms", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (res.data.status === 201) {
  //     console.log("Data get");
  //     setalldata(res.data.data);
  //   } else {
  //     console.log("error");
  //   }
  //   return res.data;
  // };

  const { id } = useParams();

  
  useEffect(() => {
    const getRoomData = async () => {
      let res = await fetch("/rooms/details/" + id);
         res = await res.json();
     console.log(res);

         setalldata({
          roomID:res.roomID,
           roomName:res.roomName,
           Description:res.description,
           roomType:res.roomType,
           oldprice:res.oldprice,
           Price:res.price,
           image:res.image
       });
     };

    getRoomData();
  },[id]);

 
  return (
    <>
        <Navbar />

      <section
        style={{
          height: "100vh",
        }}
      >
    
        <div className="container mt-2 ">
          <h2 className="page-header">
            <br />
           Room Detail
          </h2>
        </div>
        <div className="d-flex justify-content-center">
        </div>
        <div className="container  p-5">
          <Row className=" bg-light p-4 px-4  rounded-3 shadow">
          

          <Col lg={11}>
            <div>
              <img src={`/${props.image}`} style={{
                width: "400px"
              }} alt="" srcset="" />
            </div>
          </Col>
          <Col lg={10}>
            <div className="title h3 fw-bold pt-5">
              {props.roomName}
            </div>
            <div className="pt-4">

            <h4 className="fw-bold h4">Room Type</h4>  <span className="h6">{props.roomType}</span> 
            </div>
            <div className="pt-4">
              <h4 className="fw-bold">Description: <p className="lead mt-2">{props.Description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, cupiditate?</p></h4>
            </div>
            <div>
              <s className="h5 text-secondary">RS {props.oldprice}</s>
            </div>
            <div>
              <h1 className="text-danger fw-bold">RS {props.Price}</h1>
            </div>
          </Col>
          <Col>
           <NavLink to={"/rooms/booking/"}> <button className="p-3 btn btn-danger" style={{
              marginTop: "350px"
            }}  key={props.roomID}>Book Now</button></NavLink>
          </Col>
          
          </Row>
        </div>
      </section>
      <Footer />

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

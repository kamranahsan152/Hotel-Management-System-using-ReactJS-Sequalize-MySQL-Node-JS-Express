import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import AdminPanel from "./AdminPanel";
import axios from "axios";
import { useParams} from "react-router-dom";

import { useState } from "react";
const UpdateRoom = (props) => {
  const [update_data, setInputValue] = useState({
    roomName: '',
    Description: '',
    roomType: '',
    Price: '',
    oldprice: '',
    image: '',
  });
  const [file, setfile] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...update_data, [name]: value });
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setfile(e.target.files[0]);
  };
  const { id } = useParams();
  
  useEffect(() => {
    const getRoombyID = async () => {
      let res = await fetch("/api/data/roomID/" + id);
      res = await res.json();
      setInputValue({
        roomName:res.roomName,
        Description:res.description,
        roomType:res.roomType,
        oldprice:res.oldprice,
        Price:res.price,
        image:res.image
    });
    };
    getRoombyID();
  }, [id]);

  const handleUpdate = async()=>{
    
      const formData = new FormData();

      formData.append("roomName", update_data.roomName);
      formData.append("roomType", update_data.roomType);
      formData.append("photo", file);
      formData.append("Description", update_data.Description);
      formData.append("oldprice", update_data.oldprice);
      formData.append("Price", update_data.Price);
 
      await axios.put("/add/update/" + id, formData);
      window.location.replace('/add');
      alert("Update successfully");
  }


  return (
    <>
      <AdminPanel>
        <div className="container  border" style={{ borderRadius: "20px" }}>
          <h3 className="p-3 fw-bold">Room Updation</h3>
          <div className="row">
            <div className="col-lg-7 p-2">
              <Form onSubmit={handleUpdate} >
                <Form.Label className="h4 font-custom fw-bold">
                  Room Title
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Room Title"
                  className="mb-4"
                  name="roomName"
                  value={update_data.roomName}
                  onChange={handleInput}
                />
                <Form.Group className="mb-3">
                  <Form.Label className="h4 font-custom fw-bold">
                    Room Type
                  </Form.Label>
                  <select
                    value={update_data.roomType}
                    name="roomType"
                    className="browser-default custom-select"
                    onChange={handleInput}
                  >
                    <option value="NULL">Select</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Triple Bed">Triple Bed</option>
                    <option value="Single Bed">Single Bed</option>
                  </select>
                </Form.Group>
                <Form.Label className="h4 font-custom fw-bold">
                  Description
                </Form.Label>
                <textarea
                  className="form-control  form-control-lg mb-4"
                  name="Description"
                  id="message"
                  cols="30"
                  rows="2"
                  placeholder="Description"
                  value={update_data.Description}
                  onChange={handleInput}

                ></textarea>
                <Form.Label className="h4 font-custom fw-bold">
                  Old Price Per/Night (RS)
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Old Price"
                  className="mb-4"
                  name="oldprice"
                 value={update_data.oldprice}
                  onChange={handleInput}
                

                />
                <Form.Label className="h4 font-custom fw-bold">
                  Price Per/Night (RS)
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  className="mb-4"
                  name="Price"
                  value={update_data.Price}
                  onChange={handleInput}

                />
                <Form.Label className="h4 font-custom fw-bold">
                  Room Image
                </Form.Label>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Large file input example</Form.Label>
                  <Form.Control
                    type="file"
                    name="photo"
                    onChange={handleFile}
                  />
                  <img
                    src={`/${update_data.image}`}
                    className="mt-2"
                    alt={update_data.image}
                    style={{ width: 150, borderRadius: "10px" }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="p-2 float-right w-25"
                  style={{ fontSize: "20px" }}
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </AdminPanel>
    </>
  );
};

export default UpdateRoom;

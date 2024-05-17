import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Room = () => {
  const [data, setalldata] = useState([]);

  useEffect(() => {
    const getRoomData = async () => {
      const { data } = await axios.get("/getRooms");
      setalldata(data);
    };
    getRoomData();
  });

  const [inputValue, setInputValue] = useState({
    roomName: "",
    Description: "",
    roomType: "",
    Price: "",
    oldprice: "",
    image: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [file, setfile] = useState("");

  const handleFile = (e) => {
    setfile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("roomName", inputValue.roomName);
    formData.append("roomType", inputValue.roomType);
    formData.append("photo", file);
    formData.append("Description", inputValue.Description);
    formData.append("oldprice", inputValue.oldprice);
    formData.append("Price", inputValue.Price);

    await axios
      .post("/add", formData)
      .then((res) => res.data)
      .catch((err) => {
        if (err) throw err;
      });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await axios.delete("/add/" + id);
    window.location.reload();
  };

  return (
    <>
      <AdminPanel>
        <div className="row ">
          <div className="col-lg-3 mt-4">
            <Form onSubmit={handleSubmit}>
              <Form.Label className="h4 font-custom fw-bold">
                Room Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Room Title"
                className="mb-4"
                name="roomName"
                value={inputValue.roomName}
                onChange={handleInput}
              />

              <Form.Group className="mb-3">
                <Form.Label className="h4 font-custom fw-bold">
                  Room Type
                </Form.Label>
                <select
                  value={inputValue.roomType}
                  name="roomType"
                  onChange={handleInput}
                  className="browser-default custom-select"
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
                value={inputValue.Description}
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
                value={inputValue.oldprice}
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
                value={inputValue.Price}
                onChange={handleInput}
              />
              <Form.Label className="h4 font-custom fw-bold">
                Room Image
              </Form.Label>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" name="photo" onChange={handleFile} />
              </Form.Group>
              <div className="form-group mt-4 text-right">
                <button type="submit" className="btn btn-lg btn-primary w-25">
                  Add
                </button>
              </div>
            </Form>
          </div>
          <div className="col-lg-8  table-responsive px-5  mt-4">
            <div className="heading">
              <h3 className="font-custom  fw-bold h2">Room Details</h3>
            </div>
            <table
              className="table table-bordered "
              style={{ borderRadius: "30px !important" }}
            >
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col">RoomID</th>
                  <th scope="col">Room Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Image</th>
                  <th scope="col">Old Price</th>
                  <th scope="col">Price Per/Night</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0
                  ? data.map((elem, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <h5 className="p-3">{elem.roomID}</h5>
                            </td>
                            <td>
                              <h5 className="p-3">{elem.roomName}</h5>
                            </td>
                            <td>
                              <h5 className="p-3">{elem.roomType}</h5>
                            </td>
                            <td>
                              <img
                                src={elem.image}
                                style={{
                                  height: "70px",
                                  width: "70px",
                                  alignContent: "center",
                                }}
                                alt="Blob"
                              />
                            </td>
                            <td>
                              <h5 className="p-3">{`RS   ${elem.oldprice}`}</h5>
                            </td>
                            <td>
                              <h5 className="p-3">{`RS   ${elem.price}`}</h5>
                            </td>
                            <td>
                              <button
                                onClick={() => handleDelete(elem.roomID)}
                                type="button"
                                className="btn btn-danger mt-2 ml-2"
                              >
                                <i>
                                  <AiFillDelete />
                                </i>
                              </button>
                              <button
                                className="btn btn-success mt-2 ml-2"
                                style={{
                                  borderRadius: "30px",
                                }}
                              >
                                {" "}
                                <NavLink
                                  exact
                                  to={`/add/update/${elem.roomID}`}
                                  className="text-decoration-none text-white"
                                >
                                  Update
                                </NavLink>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </AdminPanel>
    </>
  );
};

export default Room;

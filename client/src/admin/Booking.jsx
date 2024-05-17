import React from "react";
import AdminPanel from "./AdminPanel";
import {} from "react-icons/ai";
const UpdateRoom = () => {
  return (
    <>
      <AdminPanel>
        <div className="container-fluid">
          <div class="table-responsive py-5 px-5 px-lg-5 mt-4">
            <div className="heading">
              <h3 className="font-custom fw-bold h1">Booking Details</h3>
            </div>
            <table class="table table-auto table-bordered" style={{ borderRadius: "30px !important" }}>
              <thead class="bg-primary text-white">
                <tr>
                  <th scope="col">UserID</th>
                  <th scope="col">User Email</th>
                  <th scope="col">Room Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Room Per/Night</th>
                  <th scope="col">Status</th>
                  <th scope="col">RoomID</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>example@gmail.com</td>
                  <td>Luxury</td>
                  <td>Double Bed</td>
                  <td>RS 4500</td>
                  <td>Pending</td>
                  <td>12</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success mb-2 mt-2 ml-2"
                    >Approve
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mb-2 mt-2 ml-2"
                    >Decline
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AdminPanel>
    </>
  );
};

export default UpdateRoom;

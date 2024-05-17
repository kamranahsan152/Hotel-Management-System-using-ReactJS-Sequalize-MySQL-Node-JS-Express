import React from "react";
import AdminPanel from "./AdminPanel";
import AphexChart from "./Apexchart";


const Dashboard = () => {

 
  return (
    <>
      <AdminPanel>
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-2 col-md-3">
              <div className="bg-white shadow border-top text-center   p-4"  style={{borderRadius: "20px"}}>
                <h4 className="font-custom fw-bold  text-uppercase">
                  Total ROOMS
                </h4>
                <h4 className="mt-3 font-custom display-4 text-primary">10</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="bg-white  shadow border-top border-4 text-center  p-4" style={{borderRadius: "20px"}}>
                <h4 className="font-custom fw-bold  text-uppercase">
                  CUSTOMERS
                </h4>
                <h4 className="mt-3 font-custom text-primary display-4">20</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 mb-4">
              <div className="bg-white shadow  border-top border-4 text-center  p-4" style={{borderRadius: "20px"}}>
                <h4 className="font-custom fw-bold  text-uppercase">
                  Approved Booking
                </h4>
                <h4 className="mt-3 font-custom text-primary display-4">10</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 mb-4">
              <div className="bg-white shadow border-top border-4 text-center  p-4" style={{borderRadius: "20px"}}>
                <h4 className="font-custom  fw-bold text-uppercase">
                  Pending Booking
                </h4>
                <h4 className="mt- font-custom  text-primary display-4">5</h4>
              </div>
            </div>
            <div class="col-lg-7 ml-5 table-responsive py-5 px-5 px-lg-5 mt-4">
          <div className="heading">
            <h3 className="font-custom fw-bold h1">Booking Details</h3>
          </div>
            <table class="table table-hover" style={{borderRadius: "30px !important"}}>
              <thead class="bg-primary text-white">
                <tr>
                  <th scope="col">UserID</th>
                  <th scope="col">Room Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Price Per/Night</th>
                  <th scope="col">Status</th>
                  <th scope="col">RoomID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Luxury</td>
                  <td>Double Bed</td>
                  <td>RS 4500</td>
                  <td>Pending</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Luxury</td>
                  <td>Double Bed</td>
                  <td>RS 4500</td>
                  <td>Pending</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Luxury</td>
                  <td>Double Bed</td>
                  <td>RS 4500</td>
                  <td>Pending</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <AphexChart />
          </div>
          </div>
         
         
        
        </div>
      </AdminPanel>
    </>
  );
};

export default Dashboard;

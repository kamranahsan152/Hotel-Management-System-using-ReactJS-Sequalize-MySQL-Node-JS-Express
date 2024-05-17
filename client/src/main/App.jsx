import { Routes, Route } from "react-router-dom";
import About from "../component/About";
import Landing from "../component/Landing";
import Contact from "../component/Contact";
import SignUp from "../component/SignUp";
import Login from "../component/Login";
import Room from "../component/Room";
import RoomDetail from "../component/RoomDetail";
import AdminPanel from "../admin/AdminPanel";
import AddRoom from "../admin/Rooms";
import Dashboard from "../admin/Dashboard";
import Booking from "../admin/Booking";
import Update from "../admin/UpdateRoom";
import Logout from "../component/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/UserReducer";

const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/rooms" element={<Room />} />
      <Route path="/rooms/details/:id" element={<RoomDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddRoom />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/add/update/:id" element={<Update />} />
    </Routes>
  );
};
export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;

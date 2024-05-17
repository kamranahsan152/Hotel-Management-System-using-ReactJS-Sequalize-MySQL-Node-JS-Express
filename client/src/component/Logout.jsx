import React, { useContext, useEffect } from "react";
import { UserContext } from "../main/App";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history("/login", { replace: true });
        if (res.status !== 200) {
          const err = new Error(res.err);
          throw err;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div></div>;
};

export default Logout;

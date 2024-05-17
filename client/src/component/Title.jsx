import React from "react";
import "../style/title.css";
export default function Title({ title }) {
  return (
    <>
      <div className="container  text-center">
        <div className=" p-4 ">
          <h4 className="title-sec page-header fw-bold">{title}</h4>
          <div />
        </div>
      </div>
    </>
  );
}

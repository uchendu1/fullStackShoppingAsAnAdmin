import React from "react";
import Topbar from "../topbar/Topbar";
import SideBar from "../sidebar/Sidebar";
import "./index.css";

const index = ({ children, ...props }) => {
  return (
    <div className="wrapper">
      <Topbar />
      <div className="container">
        <SideBar />

        {children}
      </div>
    </div>
  );
};

export default index;

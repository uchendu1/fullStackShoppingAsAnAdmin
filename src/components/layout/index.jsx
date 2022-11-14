import React from "react";
import Topbar from "../topbar/Topbar";
import SideBar from "../sidebar/Sidebar";

const index = ({ children, ...props }) => {
  return (
    <div className="">
      <Topbar />
      <div className="container">
        <SideBar />

        {children}
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { Outlet, Link } from "react-router-dom";
const Drawers = () => {
  document.title = "Drawer";
  return (
    <div>
      <nav className="all-container">
        <Link className="child" to={`/drawer/drawer1`}>
          Drawer Simple
        </Link>
        <Link className="child" to="/drawer/drawer2">
          Permanent Drawer
        </Link>
      </nav>{" "}
      <Outlet />
    </div>
  );
};

export default Drawers;

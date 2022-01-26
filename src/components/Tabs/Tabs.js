import React from "react";
import { Outlet, Link } from "react-router-dom";
const Tabs = () => {
  document.title = "Tabs";
  return (
    <div>
      <nav className="all-container">
        <Link className="child" to={`/tabs/tab1`}>
          Fixed Tabs
        </Link>
        <Link className="child" to="/tabs/tab2">
          Scrollable Tabs
        </Link>
        <Link className="child" to="/tabs/tab3">
          Tabs with Icons
        </Link>
      </nav>{" "}
      <Outlet />
    </div>
  );
};

export default Tabs;
